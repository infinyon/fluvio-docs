FROM ubuntu:22.04

RUN apt-get update
RUN apt-get install -y curl unzip
RUN apt-get install -y tini openssl curl
RUN curl -fsS https://hub.infinyon.cloud/install/install.sh | bash

ENV PATH "$PATH:/root/.fluvio/bin"
ENV PATH "$PATH:/root/.fvm/bin"
