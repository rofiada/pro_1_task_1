const express = require('express')
const app = express();
require('dotenv').config()
const mongoose = require('monoose')
const routes = require('./routes/index.route');
const morgan = require('morgan');

//Database connection

function  dbConnection() {
  const url = process.env.DB_URL
  mongoose.connect(url)
  .then(()=> {
    console.log('db connected !!')

  })
.catch((err)=> {
  console.log(err)
  console.log('db not connected')
})  
}

app.use(morgan("dev"))
app.use(express.json())
app.use("/api",routes)
app.all("*" , (req,res)=> {
  res.status(400).send({message: "invalid route ??"})
})



const PORT = process.env.PORT || 3000
app.listen(PORT , () => {
  dbConnection()
  console.log(`Server IS Running ${PORT}`)
})