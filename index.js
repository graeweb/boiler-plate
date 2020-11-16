const express = require('express');
const app = express();
const port = 4000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://grae:abcd1234@grae.9ndit.mongodb.net/grae?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err =>console.log('err Connected...'))


app.get('/', function(req, res) { res.send('hello world'); });

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))