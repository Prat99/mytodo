var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

    mongoose.connect('mongodb://localhost:27017/todos');


     var todoSchema = new mongoose.Schema({
         name: String,
         text: String,
        date: { type: Date, default: Date.now }
     });
 
     var  todo  = mongoose.model('Todo', todoSchema);

