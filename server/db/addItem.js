const db = require("./index");

// const docRef = db
//   .collection("users")
//   .doc()
//   .set({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });

module.exports = (name, sold, votes, price) => {
  return db()
    .collection("items")
    .doc()
    .set({
      name,
      sold,
      votes,
      price
    });
};
