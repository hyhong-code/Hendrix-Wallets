require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const pool = require("./config/postgres");
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const categoryRouter = require("./routes/categoryRouter");

// Middlewares
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res, next) => {
  const users = await pool.query("SELECT * FROM users;");
  res.send(users.rows);
});

// Mount Routers
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}`));
