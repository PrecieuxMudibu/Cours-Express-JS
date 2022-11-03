const express = require('express');
const app = express(); // On crée une instance d'express. On crée notre petit serveur web sur lequel va tourner notre application
const port = 3000;

app.get('/', (request, response) => response.send('Hello, Express'));

app.listen(port, console.log(`Notre application tourne sur le port ${port}`));
