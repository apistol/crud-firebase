const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const {
  getUsers,
  createUser,
  addAvatarImage,
  login,
  addSocial,
  register,
  deleteSocial
} = require("./handlers/users")


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
app.post("/user/register", register)
app.post("/delete/social/:userId", deleteSocial)


exports.api = functions.https.onRequest(app);
