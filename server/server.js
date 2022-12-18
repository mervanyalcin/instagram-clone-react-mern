const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan")

// Body bizim input değerlerimiz
// Params ise allah biliyor

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const conversationRoutes = require("./routes/conversation.js");
const messageRoutes = require("./routes/message.js");

const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

//middleware
app.use(express.json())
app.use(morgan("common"))

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", conversationRoutes);
app.use("/message", messageRoutes);

app.listen(port, () => {
  connect();
  console.log("Server is running on port " + port);
});
