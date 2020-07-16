require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Try out stripe
app.post("/save-stripe-token", (req, res) => {
  console.log(req.body);
  // Change order status to paid here
});

// Mount Routers
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/category", categoryRouter);
app.use("/api/item", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}`));
