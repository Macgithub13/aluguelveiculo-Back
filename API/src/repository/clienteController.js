import {Router} from 'express';
import cors from 'express';
import { addCliente } from '../controller/clienteRepository';

const server=Router();
server.use(cors());

// server.post('/cliente', async (req,resp) =>{ 

//     try{}

//     catch(404){

//     }
// )}
