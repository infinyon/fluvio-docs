use std::io::Read;
use std::collections::BTreeMap;
use async_std::stream::StreamExt;
use flate2::{bufread::GzEncoder, Compression};

use fluvio::{Fluvio, Offset, SmartModuleExtraParams};
use fluvio::consumer::{
    ConsumerConfigExtBuilder,
    SmartModuleInvocation,
    SmartModuleInvocationWasm,
    SmartModuleKind,
};

const TOPIC_NAME: &str = "hello-rust";
const PARTITION_NUM: u32 = 0;

#[async_std::main]
async fn main() {
    // Connect to Fluvio cluster
    let fluvio = Fluvio::connect().await.expect("Failed to connect to Fluvio");

    // Build smartmodule invocation from wasm file
    let sm_invocation = build_smartmodule_from_file(
        SmartModuleKind::Map,
        "regex_text.wasm", 
        r#"[{"replace": {"regex": "secret", "with": "****"}}]"#,
    );

    // Consume last record from topic
    let config = ConsumerConfigExtBuilder::default()
        .topic(TOPIC_NAME)
        .partition(PARTITION_NUM)
        .offset_start(Offset::end())
        .smartmodule(vec![sm_invocation])
        .build()
        .expect("Failed to build consumer config");

    // Create consumer & stream one record
    let mut stream = fluvio.consumer_with_config(config).await.expect("Failed to create consumer");
    if let Some(Ok(record)) = stream.next().await {
        let string = String::from_utf8_lossy(record.value());
        println!("{}", string);
    }
}

// Create a smartmodule invocation from a wasm file
fn build_smartmodule_from_file(
    kind: SmartModuleKind,
    file_path: &str, 
    spec: &str
)  -> SmartModuleInvocation {
    // Read smartmodule wasm file
    let raw_buffer = std::fs::read(file_path).expect("wasm file is missing");
    let mut encoder = GzEncoder::new(raw_buffer.as_slice(), Compression::default());
    let mut buffer = Vec::with_capacity(raw_buffer.len());
    encoder.read_to_end(&mut buffer).expect("failed to read encoded wasm file");

    // Create smartmodule invocation with params
    let mut param_tree = BTreeMap::<String,String>::new();
    param_tree.insert("spec".to_owned(), spec.to_owned());
    let params = SmartModuleExtraParams::new(param_tree, None);

    // Return smartmodule invocation
    SmartModuleInvocation {
        wasm: SmartModuleInvocationWasm::AdHoc(buffer),
        kind: kind,
        params: params,
    }
}
