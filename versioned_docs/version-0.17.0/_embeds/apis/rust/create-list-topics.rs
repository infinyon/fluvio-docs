use fluvio::metadata::topic::TopicSpec;
use fluvio::Fluvio;

const TOPIC_NAME: &str = "hello-rust";
const PARTITIONS: u32 = 1;
const REPLICAS: u32 = 1;

#[async_std::main]
async fn main() {
    // Connect to Fluvio cluster
    let fluvio = Fluvio::connect().await.expect("Failed to connect to Fluvio");

    // Create a topic
    let admin = fluvio.admin().await;
    let topic_spec = TopicSpec::new_computed(PARTITIONS, REPLICAS, None);
    let _topic_create = admin
        .create(TOPIC_NAME.to_string(), false, topic_spec)
        .await;

    // List topics    
    let topics = admin.all::<TopicSpec>().await.expect("Failed to list topics");
    let topic_names = topics.iter().map(|topic| topic.name.clone()).collect::<Vec<String>>();
    
    println!("Topics:\n  - {}", topic_names.join("\n  - "));
}