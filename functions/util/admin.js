const admin = require("firebase-admin");
const serviceAccount = require("../firebaseconfig.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialapp-21755.firebaseio.com"
});
const db = admin.firestore();
module.exports = { admin, db };
