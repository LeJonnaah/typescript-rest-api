import { MongoClient } from 'mongodb';

const express = require('express');
const bodyParser = require('body-parser');

async function start() {
    try {
        const app = express();

        const mongoClient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    } catch (error) {
        console.log(error);
    }
}

start();