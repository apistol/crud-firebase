const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const {getUsers, createUser} = require("./handlers/users")


const app = express();

app.use(cors({
  origin: "*",
}))

app.use(morgan("dev"))

app.get("/users", getUsers)
app.post("/users", createUser)


exports.api = functions.https.onRequest(app);

