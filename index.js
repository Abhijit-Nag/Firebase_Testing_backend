const express=require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.SECRET_KEY);

app.listen('5000', ()=>{
    console.log('backend server is running!');
})