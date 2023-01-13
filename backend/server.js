const axios = require('axios');
const express = require('express');
var cors = require('cors');
const { rsort } = require('semver');
const app = express();

app.use(cors())
app.use(express.json())

app.post('/', function (req, res) {
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
            prompt: `Answer like you are Dwayne Johnson. Answer in 50 words max. If the question asks 
                     who are you, then reply "Dwayne Johnson". Question: ${req.body.message}`,
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



app.listen(6999, ()=> console.log("listening on port 6999..."));
