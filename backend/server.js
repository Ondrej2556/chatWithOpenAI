const axios = require('axios');
const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv')
const app = express();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }));
dotenv.config();
const salt = bcrypt.genSaltSync(10);


const connection = mysql.createConnection({
    host: "localhost",
    port: 7899, 
    user: "root",
    database:"chatAppDB"
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
});


const db = {
    username: "ondrej",
    password: "ondrej"
}

API_KEY = process.env.OPENAI_API
app.post('/chat', function (req, res) {
    const options = {
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${API_KEY}`
            //GET YOUR API KEY ON OFFICIAL OPENAI WEB
        },
        data: {
            model: "text-davinci-003",
            prompt: `Pretend and answer like you were ${req.body.person}. Answer in 30 words max. Question: ${req.body.message}`,
            max_tokens: 50
        }
    };

    axios(options)
    .then(response => {
        //Respone contains some shitty characters like \n, so i had to delete them.
        let aiResponse = response.data.choices[0];
        aiResponse.text = aiResponse.text.replace(/\n\n/g, "");
        res.send(aiResponse);
    })
    .catch(error => {
        res.status(400).send("Something went wrong", error);
    });
})

app.post("/login", async (req, res) => {
    const {username,password} = await req.body;
    const hash = bcrypt.hashSync(password, salt);
    connection.query(`SELECT username FROM users where username="${username}" AND password="${hash}"`, function (err, result, fields) {
        if (err) throw err;
        if(result.length === 0){
            return res.status(303).json("Bad credentials");
        }else{
            return res.status(201).json(result[0].username)
        }
    });
  })


app.post("/register", async (req,res) =>{
    const {username, password} = await req.body;
    const hash = bcrypt.hashSync(password, salt);

    connection.query(`INSERT INTO users (id, username,password) VALUES (id, "${username}", "${hash}")`, function (err, result, fields) {
        if (err) throw err;
        //Tady potrebuju dopsat response na successful register
        console.log("success!")
    });
})

app.listen(6999, ()=> console.log("listening on port 6999..."));
