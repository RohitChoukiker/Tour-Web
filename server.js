const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { status, type } = require("express/lib/response");
const fs = require("fs");

const url = "mongodb://127.0.0.1:27017/tour-api";
mongoose
.connect(url)
.then(() => {
  console.log("DataBase Connection Successful!");
})
.catch((err) => {
  console.log("Not Connected");
});


const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')




const app = express();
app.use(morgan("tiny"));
app.use(express.json());

const PORT = 8080;

app.use('/api/tours',tourRouter)
app.use('/api/user',userRouter)

app.listen(PORT, () => {
  console.log(`Server is running at 127.0.0.1:${PORT}`);
});
