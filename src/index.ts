import { serverMongo } from './infrastructure/express/server';

import mongoose from 'mongoose';
import express from 'express';

const app = express();


 serverMongo()
const  MONGO_URL ='mongodb+srv://jeferson:junior1112@cluster0.vfwcfpn.mongodb.net/?retryWrites=true&w=majority'


 mongoose.Promise = Promise;
 mongoose.connect(MONGO_URL);
 mongoose.connection.on('error', (error: Error) => console.log(error));
 

