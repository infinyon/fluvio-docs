use std::time::Duration;

use fluvio::{Fluvio, TopicProducerConfigBuilder, Compression, RecordKey};

const TOPIC_NAME: &str = "hello-rust";

#[async_std::main]
async fn main() {
    // Use config builder to create a topic producer config
    let producer_config = TopicProducerConfigBuilder::default()
        .batch_size(500)
        .linger(Duration::from_millis(500))
        .compression(Compression::Gzip)
        .build().expect("Failed to create topic producer config");

    // Connet to fluvio cluster & create a producer
    let fluvio = Fluvio::connect().await.unwrap();
    let producer = fluvio.topic_producer_with_config(TOPIC_NAME, producer_config)
        .await.expect("Failed to create a producer");

    // Send 10 records
    for i in 1..=10 {
        let record = format!("Record-{}", i);
        producer.send(RecordKey::NULL, record.as_str()).await.unwrap();
    }
    producer.flush().await.unwrap();

    println!("Sent 10 records successfully.");
}