// Import packages
const express = require("express");
const listener = require("./routes/listener");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/alert-hook", listener);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));