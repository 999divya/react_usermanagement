require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn')
const PORT= process.env.PORT||4000;
const errorHandler=require('./middleware/errorMiddleware')

connectDB();

app.use(express.json());

app.use('/api/user', require('./routes/userRoute'));
app.use('/api/admin',require('./routes/adminRoute'));
// app.use(notFound)
app.use(errorHandler)

mongoose.connection.once('open',()=>{
    app.listen(PORT, ()=>console.log(`Listening to PORT number ${PORT}`))
    console.log('Connected to mongodb')
})
