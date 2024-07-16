# Digital Music Library
This project is a digital music library application that allows users to manage their music collection. It uses React for the frontend and Express with SQLite for the backend.
The user can add or delete artists, albums and songs, update albums' description and save their favourite songs.

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

## Installation

### Clone the Repository
1. Clone the repository and navigate to the project directory:
    ```
    cd digital-music-library
    ```

### Set up the Frontend
2. Install dependencies:
    ```
    npm install
    npm install react-router-dom@latest
    npm install dompurify
    npm install react-bootstrap bootstrap
    npm install react-icons
    npm install uuid
    npm run build
    ```

### Set up the Backend
3. Navigate to the backend directory, initialize the backend project and install dependencies:
    ```
    cd music-database
    npm init -y
    npm install express sqlite3 ejs
    npm install uuid
    npm install dotenv
    ```

### Running the Project
Builds the frontend for production. After running the Backend, click on the link printed on the terminal and you will see the final product.
    ```
    npm run build
    ```


### Running the Frontend
1. To start the development server for the frontend, run:
    ```
    cd digital-music-library
    npm run dev
    ```
   This will start Vite's development server with Hot Module Replacement.

### Running the Backend
2. To start the backend server, run:
    ```bash
    cd music-database
    node create-database.js
    node import-data.js
    # go into server.js (line 5) and change the port number to another unused port, other than 3000 and 3001
    node server.js
    ```
