const express = require('express');
// const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express(); // On crée une instance d'express. On crée notre petit serveur web sur lequel va tourner notre application
const port = 5000;
const { success, getUniqueId } = require('./helper.js');
const morgan = require('morgan');
let pockemons = require('./mock-pockemon');

app.use(morgan('dev')).use(bodyParser.json());
// .use(favicon('./favicon.ico'))

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

app.post('/api/pockemons', (request, response) => {
    const id = getUniqueId(pockemons);

    const newPockemon = { id, ...request.body, created: new Date() };
    // const newPockemon = {
    //     id,
    //     name: request.body.name,
    //     hp: request.body.hp,
    //     cp: request.body.cp,
    //     picture: request.body.picture,
    //     types: request.body.types,
    //     created: request.body.created,
    // };
    pockemons.push(newPockemon);

    const message = `Le pockemon ${newPockemon.name} a été créé.`;
    response.json(success(message, pockemons));
});

app.put('/api/pockemon/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const pockemonUpdated = { ...request.body, id: id };
    pockemons = pockemons.map((pockemon) => {
        return pockemon.id === id ? pockemonUpdated : pockemon;
    });

    const message = `Le pockemon ${pockemonUpdated.name} a été mis à jour.`;
    response.json(success(message, pockemonUpdated));
});

app.listen(port, console.log(`Notre application tourne sur le port ${port}`));
