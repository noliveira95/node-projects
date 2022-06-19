const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
require("dotenv").config();
const app = express();

// Middleware

app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

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
