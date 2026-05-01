require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("./services/cronService");


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/reminders", require("./routes/reminderRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));