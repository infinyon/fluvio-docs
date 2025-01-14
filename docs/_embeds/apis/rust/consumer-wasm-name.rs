use std::collections::BTreeMap;
use async_std::stream::StreamExt;

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
    let fluvio = Fluvio::connect().await.unwrap();

    // Build smartmodule invocation from wasm file
    let sm_invocation = build_smartmodule_from_name(
        SmartModuleKind::Map,
        "fluvio/regex-text@0.1.0",
        r#"[{"replace": {"regex": "secret", "with": "****"}}]"#,
    );

    // Consume last record from topic
    let config = ConsumerConfigExtBuilder::default()
        .topic(TOPIC_NAME)
        .partition(PARTITION_NUM)
        .offset_start(Offset::end())
        .smartmodule(vec![sm_invocation])
        .build()
        .unwrap();

    // Create consumer & stream one record
    let mut stream = fluvio.consumer_with_config(config).await.unwrap();
    if let Some(Ok(record)) = stream.next().await {
        let string = String::from_utf8_lossy(record.value());
        println!("{}", string);
    }
}

// Create a smartmodule invocation using smartmodule name
fn build_smartmodule_from_name(
    kind: SmartModuleKind,
    smartmodule_name: &str,
    spec: &str
)  -> SmartModuleInvocation {
    // Create smartmodule invocation with params
    let mut param_tree = BTreeMap::<String,String>::new();
    param_tree.insert("spec".to_owned(), spec.to_owned());
    let params = SmartModuleExtraParams::new(param_tree, None);

    // Return smartmodule invocation
    SmartModuleInvocation {
        wasm: SmartModuleInvocationWasm::Predefined(smartmodule_name.to_string()),
        kind: kind,
        params: params,
    }
}