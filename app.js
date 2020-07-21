require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(xss());
app.use(hpp());
app.use(morgan("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// Mount Routers
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);
app.use("/api/item", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Serve static files in production
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}`));
