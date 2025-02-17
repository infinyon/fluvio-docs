# build dockerfile
docker build -t fluvio:fluvio .

# start fluvio cluster
docker compose up -d

# Download profile to the CLI
fluvio profile add fluvio-docker 127.0.0.1:9103 docker