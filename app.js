const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./DB/connect");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 5000;

const start = async () => {
  /**
   * the url to connect to the database its defined on .env file
   * is added to the .gitignore, and it dont upload the file to github
   * we access the url by process.env.MONGO_URI, MONGO_URI ITS THE VARIABEL NAME
   */
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is lintening on port ${port} on host ${200}`));
  } catch (error) {
    console.log(error);
  }
};


start();
