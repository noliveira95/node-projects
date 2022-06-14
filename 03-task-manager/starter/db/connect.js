const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://nolive:9u20FXoRbTWKGrc6@nodeexpressprojects.7zkcy.mongodb.net/03-task-manager?retryWrites=true&w=majority"

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTION IS SUCCESSFUL"))
  .catch((err) => console.log(err))
