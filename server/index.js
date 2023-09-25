require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fruitRoutes = require('./fruits.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const app = express();
const port = process.env.PORT || 3000;

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Bobs Fruitshop API',
      version: '1.0.0',
    },
    servers: [{
        url: `http://localhost:${port}`,
        description: "local test server"
    }],
  };
  
  const options = {
    swaggerDefinition,
    apis: ['./*.routes.js', './*.swagger.json'],
  };

const openapiSpecification = swaggerJsdoc(options);

let errorChance = process.env.ERROR || 0; // 0 - 1 je höher der Wert, desto wahrscheinlicher ist ein Request fehlerhaft

app.use(cors());
app.use(express.json());

// Configuring body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Response-Type', 'application/json');
    next();
});

//TODO: Random ausbauen
// app.use(function (req, res, next) {
//     const rand = Math.random();
//     if (rand < errorChance) {
//         res.status(500).send("Random error!");
//     } else {
//         next();
//     }
// });


fruitRoutes.setup(app);

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.all('*', (req, res) => {
    res.status(404).send('Page not found.');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
