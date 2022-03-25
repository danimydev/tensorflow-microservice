const express = require('express');
const cors = require('./cors');
const router = require('./routes');

const { json, urlencoded } = express;

const app = express();

const PORT = process.env.PORT || 8080;

// Body
app.use(json());
app.use(urlencoded({ extended: false }));

// Cors
app.use(cors.anywhere);

// Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`microservice is running on ${PORT}`)
});