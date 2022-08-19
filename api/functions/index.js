const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const {getUsers, createUser, addAvatarImage, login, addSocial} = require("./handlers/users")


const app = express();

app.use(cors({
  origin: "*",
}))

app.use(morgan("dev"))

app.get("/users", getUsers)
app.post("/users", createUser)
app.post("/user/avatar", addAvatarImage)
app.post("/user/login", login)
app.post("/user/:id/socials", addSocial)


exports.api = functions.https.onRequest(app);

