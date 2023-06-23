const mongoose = require("mongoose");

const url = "mongodb+srv://Harshisha6:Harshu12@cluster0.g7d8hem.mongodb.net/best";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
