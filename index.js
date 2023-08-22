const express = require('express');  
const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

const BookRouter = require('./Routes/Book.Route');



app.use(BookRouter);

app.listen(8000,()=>{
    console.log("http://localhost:8000")
});