const axios = require('axios');
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }));

const db = {
    username: "ondrej",
    password: "ondrej"
}


app.post('/chat', function (req, res) {
    console.log(req.body)
    const options = {
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
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
    const {username,password} = await req.body
    if(username === db.username && password === db.password){
        return res.json(db.username)
    }else{
        return res.status(400).json("Sorry, there was an error")
    }

  })

app.listen(6999, ()=> console.log("listening on port 6999..."));
