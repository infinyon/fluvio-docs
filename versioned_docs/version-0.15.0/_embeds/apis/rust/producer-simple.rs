use chrono::Local;

use fluvio::RecordKey;

const TOPIC_NAME: &str = "hello-rust";

#[async_std::main]
async fn main() {
    // Create a record
    let record = format!("Hello World! - Time is {}", Local::now().to_rfc2822());

    // Produce to a topic
    let producer = fluvio::producer(TOPIC_NAME).await.expect("Failed to create producer");
    producer.send(RecordKey::NULL, record.clone()).await.expect("Failed to send record");

    // Fluvio batches outgoing records by default, 
    // call flush to ensure the record is sent
    producer.flush().await.expect("Failed to flush");

    println!("Sent record: {}", record);
}