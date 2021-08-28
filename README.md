# MicroMonolith Boilerplate

## Overview

This is a boilerplate for a system that can be deployed as a monolith or
as microservices, as each part is independant from the others.

## Usage

### Development

You will need `Docker` and `docker-compose` installed locally to run the system
locally and will need `npm` and `node` to install packages locally.

You can change the port that the system responds to by changing the port mapping for
the host in `proxy`. By default, it listens at `8080`.

```sh
# Starts the system locally exposing `:8080` as the entry point
docker-compose -f docker-compose.dev.yml up --build
```

### Production

You can change the port that the system responds to by changing the port mapping for
the host in `proxy`. By default, it listens at `80`.

```sh
docker-compose up --build
```

## Systems

### API

> Reachable at `/api`

You can find documentation on the available routes via `/api/insomnia-docs.yaml`. You can import those into
https://insomnia.rest client and use that client to make API calls.

### Client

> Reachable at `/`

### Databasee

> Only reachable inside system

### Cache

> Only reachable inside system

### Proxy

> Reachable at `/`

This takes requests in and maps it to the corresponding system
