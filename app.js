const express = require('express');
const app = express(); // On crée une instance d'express. On crée notre petit serveur web sur lequel va tourner notre application
const port = 5000;
const { success } = require('./helper.js');
let pockemons = require('./mock-pockemon');

const logger = (request, response, next) => {
    console.log(`URL : ${request.url}`);
    next();
};

app.use(logger);

app.get('/api/pockemon/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const pockemon = pockemons.find((pockemon) => id === pockemon.id);
    const message = `Le pockemon a bien été trouvé.`;
    response.json(success(message, pockemon));
});

app.get('/api/pockemons', (request, response) => {
    const message = 'La liste des pockemon a bien été trouvée.';
    response.json(success(message, pockemons));
    // response.send(`Il y a ${pockemons.length} pockemons`);
});

app.listen(port, console.log(`Notre application tourne sur le port ${port}`));
