const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
