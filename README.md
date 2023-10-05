# InfoDev

A dynamic tech news blog for developers, featuring user authentication, article management, and interactive discussions.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Git installed on your machine.

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repository:
    ```bash
    git clone git@github.com:MEZ901/InfoDev.git
    ```
2. Navigate to the project directory:
   ```bash
   cd InfoDev
   ```
3. Install dependencies using npm:
    ```bash
    npm install
    ```

## Configuration

You may need to configure some environment variables.

1. Extract the `.env` file from the `.env.example` file:
   ```bash
   cp .env.example .env
   ```
2. Update on the environment variables.

## Running the Application

To run the application locally, you can use the following command:

```bash
npm run dev
```

> **PS:** You have two options to access the application:
>   1. **Browser-Sync Version (Auto-Refresh):**
>       - After running `npm run dev`, the Browser-Sync version of the application will be available at `http://localhost:3001`.
>       - Browser-Sync will automatically refresh the page whenever you make changes to your EJS templates, providing a smooth development experience.
>   2. **Normal Version (Manual Refresh):**
>       - The normal version of the application can be accessed at `http://localhost:3000`.
>       - In this version, changes to your EJS templates may require manual page refreshing in your web browser.

> Feel free to choose the version that best suits your development needs.

