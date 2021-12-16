const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const PORT = 3000;
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
};
start();
