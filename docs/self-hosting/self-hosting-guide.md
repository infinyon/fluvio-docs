# Fluvio Self-Hosting Guide

This guide helps teams transition from InfinyOn Cloud to self-hosted Fluvio clusters. Fluvio is a high-performance, distributed streaming platform that you can run anywhere - from a single laptop to production Kubernetes clusters.

## 1. Prerequisites

### 1.1 Install Fluvio Tools

Install fvm (Fluvio Version Manager) and the Fluvio CLI. The version manager lets you switch between Fluvio versions and update components:

```bash
curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
```

After installation, verify it's working:
```bash
fluvio version
fvm list
```

- **Docs**: https://www.fluvio.io/docs/fluvio/quickstart

### 1.2 Understanding Fluvio Architecture

Fluvio consists of two main components:
- **SC (Stream Controller)**: The control plane that manages metadata, partitions, and cluster state
- **SPU (Stream Processing Unit)**: The data plane that stores and serves topic data

When you start a cluster, both components are deployed and automatically configured to work together.

## 2. Quick Start

Get a basic Fluvio cluster running in under 5 minutes:

```bash
# Start a local cluster
fluvio cluster start

# Create a topic
fluvio topic create quickstart

# Produce data
echo "Hello Fluvio" | fluvio produce quickstart

# Consume data
fluvio consume quickstart -B
```

This demonstrates the core workflow: start cluster → create topics → produce/consume data. All other features (connectors, SmartModules, remote clusters) build on this foundation.

## 3. Hosting Your Cluster

Choose your deployment model based on your environment and requirements. All options provide the same Fluvio features - the choice is about operational preferences.

### 3.1 Local Standalone Cluster

**Best for**: Development, testing, single-machine deployments

The simplest option - a single binary runs both SC and SPU on your local machine. No containers or orchestration required:

```bash
fluvio cluster start
```

This starts a cluster, creates a profile, and connects your CLI. Verify with:
```bash
fluvio cluster status
fluvio topic create test-topic
fluvio topic list
```

- **Docs**: https://www.fluvio.io/docs/fluvio/installation/local/

### 3.2 Docker Compose

**Best for**: Multi-container local development, consistent environments

Runs SC and SPU as separate Docker containers. Useful when you need isolation or want to test multi-component scenarios locally.

- **Docs**: https://www.fluvio.io/docs/fluvio/installation/docker/

### 3.3 Kubernetes Deployment

**Best for**: Production, scalable deployments, cloud environments

Fluvio runs on most Kubernetes platforms: AWS EKS, GKE, AKS, on-premise clusters, and local development environments (MiniKube, Orbstack, Colima).

#### Via CLI (simple)

The easiest way to deploy to your current Kubernetes context:
```bash
fluvio cluster start --k8
```

This deploys SC and SPU as Kubernetes pods with appropriate services and storage. Check the deployment:
```bash
kubectl get pods -n fluvio
fluvio cluster status
```

#### Via Helm Charts (advanced/multi-instance)

For production deployments or running multiple Fluvio instances, use Helm charts directly. Charts are in `k8-util/helm/` of the fluvio repo:

- **fluvio-sys**: System-level resources (CRDs, storage classes) - install once per cluster
- **fluvio-app**: Fluvio instance resources (SC, SPUs) - install per Fluvio instance

This approach gives you full control over resource limits, storage classes, replicas, and other production configurations.

- **Docs**: https://www.fluvio.io/docs/fluvio/installation/kubernetes/
- **Advanced**: https://www.fluvio.io/docs/latest/fluvio/installation/advanced/kubernetes-advanced/

## 4. Working with Connectors

Connectors move data in and out of Fluvio topics. **Source connectors** (inbound) pull data from external systems into topics. **Sink connectors** (outbound) push data from topics to external systems. When self-hosting, you build and deploy connectors yourself rather than using managed connectors from InfinyOn Cloud.

### 4.1 Using Community Connectors

The community maintains connectors for common data sources and sinks (HTTP, SQL, Kafka, etc.). To use one:

```bash
git clone https://github.com/fluvio-community/<connector-name>
cd <connector-name>
```

Create a `config.yaml` for your connector (see the connector's README for parameters):
```yaml
apiVersion: 0.1.0
meta:
  version: 0.1.0
  name: my-connector
  type: http-source  # or appropriate type
  topic: my-topic
http:
  endpoint: "https://api.example.com/data"
  interval: 30s
```

Build and deploy:
```bash
cdk build
cdk deploy start --config config.yaml
```

Monitor the connector:
```bash
cdk deploy list
cdk deploy log my-connector
```

- **Community Connectors**: https://github.com/fluvio-community
- **Reference Connector**: https://github.com/fluvio-community/connector-hello-source

### 4.2 Building Custom Connectors

For custom data sources, create a new connector using the CDK:

```bash
cdk generate my-connector
cd my-connector
```

This scaffolds a new connector project. Edit the source code to implement your data source/sink logic, then:

```bash
cdk build                           # Compile the connector
cdk test --config config.yaml       # Test locally
cdk deploy start --config config.yaml  # Deploy to cluster
```

The CDK handles packaging, deployment, and lifecycle management.

- **CDK Overview**: https://www.fluvio.io/docs/latest/connectors/developers/overview/

### 4.3 Production Deployment

For production, containerize connectors for better isolation and orchestration:

1. Build as a Docker image
2. Deploy via Kubernetes, Docker Compose, or your orchestration platform
3. Configure restart policies and resource limits

- **Running in Docker**: https://www.fluvio.io/docs/connectors/run-connector/docker/

## 5. Working with SmartModules

SmartModules are user-defined functions (compiled to WebAssembly) that transform, filter, or aggregate streaming data. They run inline as data flows through Fluvio - no separate infrastructure needed. Common uses include filtering events, transforming JSON, aggregating metrics, and enriching data.

### 5.1 Using Community SmartModules

The community provides pre-built SmartModules for common transformations (JSON parsing, regex filtering, etc.):

```bash
git clone https://github.com/fluvio-community/smartmodules
cd smartmodules/<module-name>
smdk build
smdk load
```

Verify it loaded:
```bash
fluvio smartmodule list
```

Use it in a consumer to transform data as you read:
```bash
fluvio consume my-topic --smartmodule my-filter
```

Or in a connector config to transform data as it flows:
```yaml
transforms:
  - uses: my-smartmodule
    with:
      param: value
```

- **Community SmartModules**: https://github.com/fluvio-community/smartmodules

### 5.2 Building Custom SmartModules

Create custom data transformation logic using the SMDK:

```bash
smdk generate my-filter --type filter
cd my-filter
```

This generates a Rust project with SmartModule scaffolding. Edit `src/lib.rs` to implement your logic, then:

```bash
smdk build                      # Compile to WASM
smdk test --text "test input"   # Test locally
smdk load                       # Load to connected cluster
```

SmartModule types:
- **Filter**: Keep/drop records based on conditions
- **Map**: Transform each record
- **ArrayMap**: Transform one record into multiple
- **Aggregate**: Accumulate state across records
- **FilterMap**: Combined filter and map

- **SMDK Overview**: https://www.fluvio.io/docs/smartmodules/smdk/
- **Build & Test**: https://www.fluvio.io/docs/smartmodules/developers/build/
- **SmartModule Types**: https://www.fluvio.io/docs/smartmodules/overview/

### 5.3 Loading Pre-compiled WASM

If you have a pre-compiled SmartModule (`.wasm` file), load it directly:

```bash
fluvio smartmodule create my-module --wasm-file ./target/wasm32-unknown-unknown/release/my_module.wasm
fluvio smartmodule list
```

This is useful for CI/CD pipelines or distributing SmartModules without requiring Rust toolchain on target systems.

## 6. Cluster Management

### 6.1 Working with Profiles

Profiles store connection info for Fluvio clusters. This lets you manage multiple clusters (dev, staging, prod) and switch between them easily.

List your profiles:
```bash
fluvio profile list
```

Add a remote cluster:
```bash
fluvio profile add production prod.example.com:9003
```

Switch between clusters:
```bash
fluvio profile switch production
fluvio topic list  # now shows topics from production cluster
```

When you run `fluvio cluster start`, it automatically creates a profile named `local` and switches to it.

### 6.2 Version Management

Use `fvm` to install and manage Fluvio versions. This is critical for testing upgrades or running specific versions.

Install a specific version:
```bash
fvm install 0.11.0
```

Install from a channel (stable, latest):
```bash
fvm install stable
fvm install latest
```

Switch between installed versions:
```bash
fvm list           # Show installed versions
fvm switch 0.11.0  # Switch to specific version
fluvio version     # Verify
```

Update to latest:
```bash
fvm update
```

- **Docs**: https://www.fluvio.io/docs/fluvio/fvm/install/

### 6.3 Monitoring and Operations

Check cluster health:
```bash
fluvio cluster check   # Run diagnostics
fluvio cluster status  # Show SC and SPU status
```

View cluster components:
```bash
fluvio cluster spu list  # List Stream Processing Units
fluvio partition list    # Show topic partitions
```

Shutdown a cluster:
```bash
fluvio cluster delete
```

For Kubernetes clusters, this removes the namespace and all resources. For local clusters, it stops the processes and cleans up data.

- **Docs**: https://www.fluvio.io/docs/fluvio/cli/fluvio/cluster/

### 6.4 Transitioning Data Between Clusters

When moving to a new Fluvio cluster, the simplest approach is to **repopulate topics from their original sources**. This ensures data consistency and avoids complexity.

However, if you need to migrate existing topic data between clusters (e.g., from a cloud instance to self-hosted), use the `flvpipe` utility:

```bash
# Install from the fluvio-community utilities repo
git clone https://github.com/fluvio-community/utilities
cd utilities/flvpipe
cargo build --release
```

Transfer data between clusters using profiles:
```bash
# Transfer 100,000 records from source cluster to destination cluster
flvpipe \
  --num-records 100000 \
  source-topic --in-profile=production \
  dest-topic --out-profile=local
```

**Note**: `flvpipe` is designed for one-time transfers. For ongoing data movement, use connectors instead.

**Caution**: Large datasets can be time and bandwidth intensive to transfer. Consider testing with a subset of records first using `--num-records` to estimate transfer time.

- **Utility**: https://github.com/fluvio-community/utilities/blob/main/flvpipe/readme.md

## 7. Community Resources

- **Main Repo**: https://github.com/infinyon/fluvio
- **Documentation Source**: https://github.com/infinyon/fluvio-docs
- **Community Organization**: https://github.com/fluvio-community
- **Discord**: https://discordapp.com/invite/bBG2dTz


