const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
require('./models/user')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'))

const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully.");
});

const studentsRouter = require("./routes/student");
const behaviorRouter = require("./routes/behavior");
const progressRouter = require("./routes/progress");
app.use("/behaviors", behaviorRouter);
app.use("/students", studentsRouter);
app.use("/progress", progressRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
