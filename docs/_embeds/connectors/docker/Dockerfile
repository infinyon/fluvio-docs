FROM debian:stable-slim as builder

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y curl

# install fluvio
RUN curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
ENV PATH="/root/.fluvio/bin:$PATH"
RUN export PATH

WORKDIR /app

# Download specific connector (change to your connector)
RUN cdk hub download infinyon/http-source@0.3.8
RUN tar -xf infinyon-http-source-0.3.8.ipkg
RUN tar -xzf manifest.tar.gz

# setup runtime container
FROM debian:stable-slim

# setup fluvio as non user
ENV USER=fluvio
RUN adduser \
    --disabled-password \
    --home "/home/$USER" \
    "$USER"
USER $USER
WORKDIR /home/fluvio/connector

# copy fluvio profile and test
COPY ./fluvio_profile.toml /home/fluvio/.fluvio/config

# Copy connector configuration
COPY --from=builder /app/http-source /home/fluvio/connector/http-source

COPY ./connector.yaml /home/fluvio/connector

# run http-source, this will be different for each connector
ENTRYPOINT ["/home/fluvio/connector/http-source",  "--config", "/home/fluvio/connector/connector.yaml"]
