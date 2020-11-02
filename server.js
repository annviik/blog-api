const express = require('express');

const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const knex = require('knex');


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});


const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`);
})