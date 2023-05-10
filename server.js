require("dotenv").config();
const express = require("express");

const app = express();

const connect = require("./db/mongoose");
connect();

const cors = require("cors");

// cors
app.use(cors({ origin: true, credentials: true }));

// initialization of middlewares

app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));

//Setting up port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// routes

const ToDo = require("./router/todoRouter");

//using routes

app.use("/api/todo", ToDo);
