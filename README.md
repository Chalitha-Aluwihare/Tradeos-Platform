# Tradeos-Platform

A modern, full-stack web platform built using a monorepo architecture. The project features a robust NestJS backend API coupled with a dynamic web frontend application.

##  Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** NestJS (Node.js framework)
- **Database ORM:** Prisma
- **Package Manager:** pnpm (Workspace monorepo architecture)
- **Language:** TypeScript

##  Repository Structure

```text
tradeos-platform/
├── apps/
│   ├── api/          # NestJS backend application
│   │   ├── prisma/   # Database schemas and configurations
│   │   └── src/      # Application modules (Auth, User, etc.)
│   └── web/          # React + Vite frontend web application
├── packages/         # Shared configurations or utilities
└── package.json      # Root monorepo configuration
