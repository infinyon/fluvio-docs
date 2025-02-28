use actix_web::{web, App, HttpResponse, HttpServer, Responder};

// Example end user token lookup function
fn lookup(end_user_token: String) -> Option<String> {
    if end_user_token == "user1_token_example" {
        Some("user1".to_string())
    } else if end_user_token == "user2_token_example" {
        Some("user2".to_string())
    } else {
        None
    }
}

// Key Filter endpoint POST handler
async fn keyfilter(end_user_token: String) -> impl Responder {
    lookup(end_user_token)
        .map(|key| HttpResponse::Ok().body(key))
        .unwrap_or_else(|| HttpResponse::NotFound().finish())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Start an HTTP server at 127.0.0.1:4000
    HttpServer::new(|| {
        App::new()
            // Map POST requests on "/keyfilter" to the `keyfilter` function
            .route("/keyfilter", web::post().to(keyfilter))
    })
    .bind(("127.0.0.1", 4000))?
    .run()
    .await
}
