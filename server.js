const express = require('express');
const { request } = require('http');
const { addAbortSignal } = require('stream');
const app = express();
// const cors = require('cors');
const PORT  = 8000;
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'name',
        'birthLocation': 'London, England'
    },
    'Chance the rapper': {
        'age': 29,
        'birthName': 'name',
        'birthLocation': 'London, England'
    },
    'unkown': {
        'age': 0,
        'birthName': 'unkown',
        'birthLocation': 'unkown'
    }
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    // const querry = request.params.name;
    if( rappers[rapperName] ){
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['unkown'])
    }
})

app.listen(PORT, () => {
    console.log(`connected to ${PORT}`)
})