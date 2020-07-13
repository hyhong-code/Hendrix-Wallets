require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");
const cartRouter = require("./routes/cartRouter");

// Middlewares
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Mount Routers
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);
app.use("/api/item", itemRouter);
app.use("/api/cart", cartRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}`));
