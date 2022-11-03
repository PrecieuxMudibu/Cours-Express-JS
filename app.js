const express = require('express');
const app = express(); // On crée une instance d'express. On crée notre petit serveur web sur lequel va tourner notre application
const port = 5000;
let pockemons = require('./mock-pockemon');


// console.log(pockemons.length)
app.get('/api/pockemon/:id', (request, response) => {
    const id= parseInt(request.params.id)
    const pockemon = pockemons.find(pockemon => id === pockemon.id)
    response.send(`Le pockemon que vous cherchez est : ${pockemon.name}`);
});

app.get('/api/pockemons', (request, response)=>{
    response.send(`Il y a ${pockemons.length} pockemons`);   
})


app.listen(port, console.log(`Notre application tourne sur le port ${port}`));
