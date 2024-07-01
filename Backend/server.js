const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const homeRouter = require("./routes/homes.routes");
const userRouter = require("./routes/users.routes");
const applicationRouter = require("./routes/application.routes");

const app = express();
app.use(cors())
app.use(express.json())
app.use("/homes", homeRouter);
app.use("/users", userRouter);
app.use("/applications", applicationRouter);

mongoose
  .connect(
    "mongodb+srv://p8563640:Dev1312mongodbatlas@cluster0.qh8dz4v.mongodb.net/McHomes?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(4000, () => {
      console.log("Serving is serving on port 4000!");
    })
  });
