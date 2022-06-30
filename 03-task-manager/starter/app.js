const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const app = express();

// Middleware

app.use(express.static("./public"));
app.use(express.json());

// Routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
