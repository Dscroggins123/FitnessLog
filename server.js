const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const api = require("./routes/apiRoutes")
const html = require("./routes/htmlRoutes")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(api)
app.use(html)

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log("App running on port 3000!");
  });
