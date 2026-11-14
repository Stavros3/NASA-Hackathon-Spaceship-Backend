# Spaceship Backend

NestJS backend for the NASA Hackathon spaceship project, using PostgreSQL via TypeORM.

## Prerequisites

- Node.js 20+
- Docker & Docker Compose (for the database)

## Setup

1. Copy the environment file and configure as needed:
   ```bash
   cp .env.example .env
   ```

2. Start the PostgreSQL database with Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the app (development)

The NestJS app runs locally (not in Docker) for development:

```bash
# watch mode
npm run start:dev
```

The app connects to PostgreSQL running in Docker via `localhost:5432`.

## Running the app (production)

Build and run the Docker image:

```bash
docker build -t spaceship-backend .
docker run -p 3000:3000 --env-file .env spaceship-backend
```

Or use Docker Compose to run both the database and the app:

```bash
docker-compose up --build
```

## Database

The database is managed by PostgreSQL running in Docker. Schema is automatically synchronized in development mode (`synchronize: true`).

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e
```