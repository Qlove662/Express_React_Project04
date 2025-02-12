const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eugene123789!',
    database: 'signup'
})

db.connect ((err)=> {
    if (err) {
      console.log ("Error on signup connect:", err)
      return;
    }
    console.log ("Connected to signup DB")
  })

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password]
    db.query(sql,[values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        console.log (data)
        return res.json(data);
    })
})
app.get('/login', (req, res) => {
   
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql,[req.query.email, req.query.password], (err, data) => {
        console.log (req.query.email, req.query.password)
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
app.get('/state', (req, res) => {
   
    const sql = "SELECT * FROM state";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("data");
        }
        console.log (data)
        if(data.length > 0) {
            return res.send(data)
        }else {
            return res.json("No state available")
        }
    })
})


app.listen ('3002', () => {
    console.log ("Server is running on port 3002")
})
