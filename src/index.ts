import { MongoClient } from 'mongodb';

const express = require('express');
const bodyParser = require('body-parser');

async function start() {
    try {
        const app = express();

        const mongoClient = await MongoClient.connect('mongodb://localhost:27017');

        await mongoClient.connect();

        app.db = mongoClient.db();

        app.use(bodyParser.json({
            limit: '500kb'
        }));


        app.use('/costumers', require('./routes/costumers'));

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log(error);
    }
}

start();