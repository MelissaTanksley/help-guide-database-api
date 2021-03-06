require('dotenv').config();

// const server = require('./server.js');

const app = require('./api/server.js');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => console.log(`*** Listening on http://localhost:${PORT}`));