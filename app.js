// CommonJS
const fetch = require('node-fetch');

//https://71ed7d98-158c-4de9-b938-cd4dc1e12484.mock.pstmn.io/
//https://www.truecorp.co.th/ansts/ekobot/mobile/eko_mobile_bot.php


fetch('https://71ed7d98-158c-4de9-b938-cd4dc1e12484.mock.pstmn.io/', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "uid": "52cb1a453136fd8c5d00010b",
            
            "lastName": "Silva",
            "email": "marcos.henrique@toptal.com",
            "password": "s3cr3tp4sswo4rd"
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });