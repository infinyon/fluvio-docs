const TOPIC_NAME: &str = "hello-rust";

#[async_std::main]
async fn main() {
    // Create key and value
    let key = "Hello";
    let value = "Fluvio";

    // create producer & send key/value
    let producer = fluvio::producer(TOPIC_NAME).await.unwrap();
    producer.send(key, value).await.unwrap();
    producer.flush().await.unwrap();

    println!("Sent [{}] {}", key, value);
}