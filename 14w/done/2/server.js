const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '690405aa',
        database: 'osw'
    }
);

db.connect(err => {
    if(err) throw err;
    console.log('My SQL Connected');
}
);

app.get('/users', (req,res)=>{
    db.query('SELECT * FROM users', (err,result) => {
        if(err) res.status(500).send(err);
        else res.json(result);
    })
})


app.get('/stock', (req,res)=>{
    db.query('SELECT * FROM products', (err,result) => {
        if(err) res.status(500).send(err);
        else res.json(result);
    })
})


app.listen(3001, ()=>{
    console.log('Backend running at http://localhost:3001');
})

