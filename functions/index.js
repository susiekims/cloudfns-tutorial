const functions = require("firebase-functions");
const app = require("express")();

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");
const FBAuth = require("./util/FBAuth");

// scream routes
app.get("/screams", getAllScreams);
app.post("/screams", FBAuth, postOneScream);

// user routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
