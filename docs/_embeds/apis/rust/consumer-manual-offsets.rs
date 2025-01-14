use async_std::stream::StreamExt;

use fluvio::{
    consumer::{ConsumerConfigExtBuilder, ConsumerStream, OffsetManagementStrategy},
    Fluvio, Offset,
};
  
const TOPIC_NAME: &str = "hello-rust";
const PARTITION_NUM: u32 = 0;
const CONSUMER_OFFSET: &str = "consumer-manual";

#[async_std::main]
async fn main() {
    // Connect to Fluvio cluster
    let fluvio = Fluvio::connect().await.unwrap();

    // Consume last record from topic
    let config = ConsumerConfigExtBuilder::default()
        .topic(TOPIC_NAME)
        .partition(PARTITION_NUM)
        .offset_start(Offset::end())
        .offset_consumer(CONSUMER_OFFSET.to_string())
        .offset_strategy(OffsetManagementStrategy::Manual)
        .build()
        .unwrap();


    // Create consumer & stream one record
    let mut stream = fluvio.consumer_with_config(config).await.unwrap();
    while let Some(Ok(record)) = stream.next().await {
        let string = String::from_utf8_lossy(record.value());
        println!("{}", string);
        stream.offset_commit().expect("offset commit failed");
        stream.offset_flush().await.expect("offset flush failed");
    }
}