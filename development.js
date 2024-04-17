const express = require('express')
const mongoose = require('mongoose')
const Tour = require("./../models/tourModel");
const fs =require('fs')

const url = "mongodb://127.0.0.1:27017/tour-api";
mongoose
.connect(url)
.then(() => {
  console.log("Successfully Connected");
})
.catch((err) => {
  console.log("Not Connected");
});


const tours = fs.readFileSync('import-data.json',Utf-8)


const importData = async ()=>{
  try{
    await Tour.create(tours);
    console.log('Data Successfully Loaded')

  }catch(err){
    console.log(err)
  }
}

// const deleteData = async ()=>{
//   try{
//     await Tour.delete();
//     console.log('Data deleted Successfully')

//   }catch(err){
//     console.log(err)
//   }
// }