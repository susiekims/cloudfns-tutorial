const functions = require("firebase-functions");
const app = require("express")();

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users");
const FBAuth = require("./util/FBAuth");

// scream routes
app.get("/screams", getAllScreams);
app.post("/screams", FBAuth, postOneScream);

// user routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);