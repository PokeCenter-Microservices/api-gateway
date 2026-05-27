# Api-Gateway

**Api-Gateway** is a NestJS REST API that acts as the entry point for the **Pokecenter-Microservices** architecture.

---

## Overview

This gateway handles all incoming HTTP requests and forwards them to the corresponding microservices via **TCP transport** (NestJS Microservices).

- **Pokémon Endpoints:** Create, read, update, and delete Pokémon by communicating with `pokemon-ms`.
- **Trainers Endpoints:** Create, read, update, and delete trainers by communicating with `trainers-ms`.
- **Trainer-Pokémon Relationship:** Get a trainer along with all their Pokémon in a single request via `GET /trainers/:id/pokemon`.
- **Trainer validation:** When creating or updating a Pokémon, the gateway validates that the `trainerId` exists before proceeding.
- **Delete protection:** A trainer cannot be deleted if they have Pokémon assigned.
- **HTTP Communication:** Listens on port `3000` for REST requests from Postman or any frontend.
- **TCP Communication:** Forwards requests to microservices running on ports `3001` and `3002`.

---

## Main Technologies

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Transport:** TCP (NestJS Microservices)

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**
- **NPM**
- **Git**

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/Pokecenter-Microservices/api-gateway
   cd api-gateway
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Make sure the microservices are running:**
   - `pokemon-ms` must be running on `localhost:3001`
   - `trainers-ms` must be running on `localhost:3002`

4. **Start the gateway:**
```bash
   npm run start:dev
```
   The API will be running at `http://localhost:3000`.

---

## Documentation

- [Postman API Documentation](https://documenter.getpostman.com/view/48535719/2sBXwmRYvP) - Complete endpoint documentation with test data and descriptions, ready to be imported or viewed online.

---

## Endpoints

### Pokémon

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/pokemon` | Create a new Pokémon |
| `GET` | `/pokemon` | Get all Pokémon |
| `GET` | `/pokemon/:id` | Get a Pokémon by ID |
| `PUT` | `/pokemon/:id` | Update a Pokémon |
| `DELETE` | `/pokemon/:id` | Delete a Pokémon |

### Trainers

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/trainers` | Create a new trainer |
| `GET` | `/trainers` | Get all trainers |
| `GET` | `/trainers/:id` | Get a trainer by ID |
| `GET` | `/trainers/:id/pokemon` | Get a trainer with all their Pokémon |
| `PUT` | `/trainers/:id` | Update a trainer |
| `DELETE` | `/trainers/:id` | Delete a trainer (only if no Pokémon assigned) |

---

## Acknowledgments

Special thanks to **Tiburcio** and the documentation provided on the campus, which were essential guides for following the steps and making this project possible.

---

## Author

Carlos Luis Pérez Santana