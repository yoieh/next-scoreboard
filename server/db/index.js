const firebase = require("firebase/app");
require("firebase/firestore");

module.exports = () => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  const fb = firebase.initializeApp(config);
  const db = fb.firestore();
  const settings = { timestampsInSnapshots: true };
  db.settings(settings);
  return db;
};

// const docRef = db
//   .collection("users")
//   .doc()
//   .set({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
