const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const {getUsers, createUser, login, register} = require("./handlers/users")


const app = express();

app.use(cors({
  origin: "*",
}))

app.use(morgan("dev"))

app.get("/users", getUsers)
app.post("/users", createUser)
app.post("/login", login)
app.post("/register", register)


exports.api = functions.https.onRequest(app);

