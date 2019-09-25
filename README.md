# Custom Admin Panel

Custom Admin Panel for managing users and reports.
Technologies: React.js with Hooks, Node/Express.js, PostgreSQL.

### Version

1.0.0

### Installation

Change directory to client and install dependencies

```sh
$ cd client && npm install
```

Same do with backend directory

```sh
$cd backend &&  npm install
```

Configure **_backend/config/env/dev.env_ **file

```sh
PORT=5000
DB_PORT=5432
DB_PASSWORD=[YOUR_DB_PASSWORD]
DB_NAME=[YOUR_DB_NAME]
DB_USER=[YOUR_DB_USER]
DB_HOST=localhost
JWT_SECRET=[YOUR_JWT_SECRET]


```

### Usage

Run both servers with:

```sh
$ npm run both
```

Hit in the browser http://localhost:5000/createTables , for creating and generating new members.

You can pick users from **backend/config/db/Users.sql**.
(Admin) Login: worourke22, Password: 766648, etc.
