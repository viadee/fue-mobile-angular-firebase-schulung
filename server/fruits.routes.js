const uuid = require('uuid/v4');

module.exports.setup = (app) => {

    /**
     * @openapi
     * components:
     *   schemas:
     *     FruitRequestBody:
     *       type: object
     *       required:
     *       - fruit
     *       properties:
     *         fruit:
     *           type: string
     *           description: Name of the fruit
     *           example: Apple
     *           minLength: 3
     *           maxLength: 21
     *     Fruit:
     *       type: string
     *       example: Banane
     *     Error:
     *       type: object
     *       properties:
     *         error:
     *           type: string
     *           description: Errormessage
     *           example: Name must be set and between 2 and 22 character long.
     *     FruitResponseArray:
     *       type: object
     *       properties:
     *         data: 
     *           type: array
     *           description: List of all fruits
     *           items:
     *             $ref: '#/components/schemas/Fruit'
     *     FruitResponse:
     *       type: object
     *       properties:
     *         data: 
     *           type: string
     *           $ref: '#/components/schemas/Fruit'
     */

    let fruits = [
        {'id':'8cb097f7-1672-458d-9acc-597356de6c08', 'name': 'Apfel'},
        {'id':'675db525-60ee-445c-bcf5-07b64107161b', 'name': 'Banane'},
        {'id':'cbd51a3d-cefe-4219-815b-c122a3c6f704', 'name': 'Melone'}
    ];

    function findFruit(id) {
        return fruits.findIndex(name => name.id === id);
    }
    
    function validFruit(name) {
        return name && name.length > 2 && name.length < 22;
    }
    
    /**
     * @openapi
     * /api/fruits:
     *   post:
     *     summary: Creates fruit
     *     responses:
     *       201:
     *         description: Fruit was created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/FruitResponse'
     *         headers:
     *           Location:
     *             description: Location of created fruit
     *             schema:
     *               type: string
     *       400:
     *         description: Fruit was not created, validation failed
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/FruitRequestBody'
     *         
     */
    app.post('/api/fruits', (req, res) => {
        const fruitName = req.body.fruit;
            const id = uuid();
            fruits.push({
                id: id,
                name: fruitName
            });
            res.setHeader('Location', `/fruits/${id}`);
            res.status(201).send({ data: fruits[findFruit(id)] });
    });
    
    /**
     * @openapi
     * /api/fruits:
     *   get:
     *     summary: Returns array of all fruits
     *     responses:
     *       200:
     *         description: Retrieves all stored fruits
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/FruitResponseArray'
     *         
     */
    app.get('/api/fruits', (req, res) => {
        const fruitNames = fruits.map(fruit => fruit.name);
        res.status(200).send(fruitNames);
    });
    
    /**
     * @openapi
     * /api/fruits/{uuid}:
     *   get:
     *     summary: Returns fruit with given uuid
     *     responses:
     *       200:
     *         description: Retrieves fruit
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/FruitResponse'
     *       404:
     *         description: Fruit with given uuid not found
     *   parameters:
     *   - name: uuid
     *     description: uuid of fruit
     *     in: path
     *     required: true
     *     example: 8cb097f7-1672-458d-9acc-597356de6c08      
     *         
     */
    app.get('/api/fruits/:id', (req, res) => {
        const fruitIndex = findFruit(req.params.id);
        if (fruitIndex !== -1) {
            res.status(200).send({ data: fruits[fruitIndex] });
        } else {
            res.status(404).end();
        }
    });
    
    /**
     * @openapi
     * /api/fruits/{uuid}:
     *   delete: 
     *     summary: Deletes fruit with given uuid
     *     responses:
     *       200:
     *         description: Fruit was deleted sucessfully
     *       404:
     *         description: Fruit with given uuid not found
     *   parameters:
     *   - name: uuid
     *     description: uuid of fruit
     *     in: path
     *     required: true
     *     example: 8cb097f7-1672-458d-9acc-597356de6c08      
     *         
     */
    app.delete('/api/fruits/:id', (req, res) => {
        const fruitIndex = findFruit(req.params.id);
        if (fruitIndex !== -1) {
            fruits.splice(fruitIndex, 1);
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    });
    
    /**
     * @openapi
     * /api/fruits/{uuid}:
     *   put: 
     *     summary: Updates fruit with given uuid
     *     responses:
     *       200:
     *         description: Fruit was updated sucessfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/FruitResponse'
     *       404:
     *         description: Fruit with given uuid not found
     *       400:
     *         description: Fruit was not updated, validation failed
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/FruitRequestBody'
     *   parameters:
     *   - name: uuid
     *     description: uuid of fruit
     *     in: path
     *     required: true
     *     example: 8cb097f7-1672-458d-9acc-597356de6c08      
     *         
     */
    app.put('/api/fruits/:id', (req, res) => {
        const fruitIndex = findFruit(req.params.id);
        if (fruitIndex === -1) {
            res.status(404).end();
        } else {
            const fruitName = req.body.name;
            if (validFruit(fruitName)) {
                fruits[fruitIndex].name = fruitName;
                res.status(200).send({ data: fruits[fruitIndex] });
            } else {
                res.status(400).send({
                    'error': 'Name must be set and between 2 and 22 character long.'
                });
            }
        }
    
    });
};

