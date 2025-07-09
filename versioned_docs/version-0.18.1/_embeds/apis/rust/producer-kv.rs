const TOPIC_NAME: &str = "hello-rust";

#[async_std::main]
async fn main() {
    // Create key and value
    let key = "Hello";
    let value = "Fluvio";

    // create producer & send key/value
    let producer = fluvio::producer(TOPIC_NAME).await.expect("Failed to create producer");
    producer.send(key, value).await.expect("Failed to send record");
    producer.flush().await.expect("Failed to flush");

    println!("Sent [{}] {}", key, value);
}