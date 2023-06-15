// const express=require('express')
// const {default:mongoose}= require('mongoose')
// const { MONGOURI } = require('./keys')
// const util = require('util');
// const app=express()

// app.use(express.json())
// mongoose.connect(MONGOURI,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Database Connected!!")
//     }
// })

// const PORT=3000
// app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))

const express = require('express');
const { default: mongoose } = require('mongoose');
const { MONGOURI } = require('./keys');
const app = express();

app.use(express.json());

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log('Database Connected!!');
  } catch (err) {
    console.log(err);
  }
};

const startServer = async () => {
  try {
    const PORT = 3000;
    await app.listen(PORT);
    console.log(`Server is running at ${PORT}`);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await connectToDatabase();
  await startServer();
})();

