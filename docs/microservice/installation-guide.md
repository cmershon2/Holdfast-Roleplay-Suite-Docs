---
sidebar_position: 1
---

# Installation Guide

Welcome to the installation guide for the Holdfast Roleplay Microservice. This guide will walk you through the process of setting up the microservice in your Next.js 13 project using Prisma. Please ensure you have the following prerequisites before you begin:

- Node.js (Recommended version: 18.18.0 or higher)
- Prisma Client
- MySQL Database
- SMTP Server

For our internal use case, we used [Planet Scale](https://planetscale.com/) for the MySQL database and [Mailgun](https://www.mailgun.com/) for the SMTP server.

## Step 1: Clone the Repository
First, clone the Holdfast Roleplay Microservice repository to your local machine.

## Step 2: Install Dependencies
Navigate to the project directory and install the required dependencies using npm:
```
cd holdfast-roleplay-microservice
npm install
```

## Step 3: Set Up Environment Variables
Create a new .env file in the project root based on the .env.example file provided. Open the .env file and fill in the necessary values for your MySQL database and SMTP server configuration. These variables are crucial for the proper functioning of the microservice.

```
# Authentication variables used for online interface
NEXTAUTH_SECRET='Very Super Secret Text'
NEXTAUTH_URL='Your URL'

# SMTP Details to send invite codes
SMTP_USERNAME='enter smtp username'
SMTP_PASSWORD='enter smtp email password'
SMTP_EMAIL='enter smtp email'
SMTP_PORT='587'
SMTP_HOST='smtp.hostname.io'

# Use 'production' when service is deployed
NODE_ENV='development'

# Holdfast-Roleplay-Microservice uses MySQL by default. If you would like to use a different DB, you may need to adjust the `prisma/schema.prisma` file 
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
DATABASE_URL='mysql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA'
STAGING_DATABASE_URL='mysql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA'
```

## Step 4: Prisma Setup
Ensure you have Prisma Client installed globally. If not, you can install it using:
```
npm install -g prisma
```

Next, generate the Prisma Client by running:
```
npx prisma generate
```

## Step 5: Database Seeding
Before deploying, it's recommended to seed your database with initial data. Use the following command to seed the database using Prisma:
```
npx prisma db seed
```

## Step 6: Deployment
With the dependencies installed, environment variables configured, and the database seeded, you are now ready to deploy your Holdfast Roleplay Microservice using Next.js 13.

For our internal use case, we deployed the service on [Digial Ocean's App Platform](https://www.digitalocean.com/products/app-platform).

## Conclusion
Congratulations! You've successfully set up the Holdfast Roleplay Microservice on your Next.js 13 project. You can now start creating immersive roleplaying experiences with player management, inventory systems, quests, dialogues, and more.

If you encounter any issues or have questions, feel free to seek help on our [GitHub repository's Issues section](https://github.com/cmershon2/Holdfast-Roleplay-Microservice/issues).