const express = require('express');
const mysql2 = require('mysql');
const cors = require('cors');
const { default: Signup } = require('../client/src/Signup/signup');

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eugene123789!',
    database: 'signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login ('name', 'email', 'password') VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password]

    db.query(sql,[values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE 'email' = ? AND 'password' = ?";
    db.query(sql,[req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("data");
        }
        if(data.length > 0) {
            return res.json("Login Successful")
        }else {
            return res.json("Invalid Credentials")
        }
    })
})


app.listen ('3002', () => {
    console.log ("Server is running on port 3002")
})
