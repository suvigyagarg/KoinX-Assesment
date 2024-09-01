# Koinx Assignment

## Overview

Koinx Assignment is a project that provides APIs to fetch user transactions and details, including total expenses and Ethereum value in INR. The project is built using Node.js and integrates with MongoDB for data storage.

## Packages Used

- `axios`: ^1.7.6
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `mongodb`: ^6.8.0
- `mongoose`: ^8.6.0
- `node-cron`: ^3.0.3

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2.**Install the dependencies:**

   ```bash
    npm install
  ```
3.**Start the server:**

    ```bash
      npm start
      ```

## API Endpoints

1. **Get All User Transactions**

   - **Endpoint:** `/api/user-transactions?userAddress=`
   - **Method:** GET
   - **Description:** Fetch all user transactions for a given user address.

2. **Get User Details**

   - **Endpoint:** `/api/user-details?userAddress=`
   - **Method:** GET
   - **Description:** Fetch the value of the user's total expenses and the current value of Ethereum in INR.

## Deployed API Link

- [Koinx Assignment API](https://koinx-assesment.onrender.com/)

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `ETHERSCAN_API_TOKEN` - Your Etherscan API token.
- `MONGO_URI` - MongoDB connection URI.
- `PORT` - Port number for the server to listen on.



