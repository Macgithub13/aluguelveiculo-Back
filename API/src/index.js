import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import clienteController from './controller/clienteController.js';

const server=express();

server.use(cors());
server.use(express.json());

server.use(clienteController);

server.listen(process.env.PORT, () => console.log(`API subiu na porta ${process.env.PORT}`));