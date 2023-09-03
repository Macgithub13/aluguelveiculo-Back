import { Router } from 'express';
import { addCliente, consultarClientes, consultarClientesNome, deletarCliente, verifCliente } from '../repository/clienteRepository.js';

const server=Router();

server.post('/locadora/cliente', async (req,resp) => {

    try{

        const cliente=req.body;
        
        const tabela= await consultarClientes();

        // Verificação se o CPF ou email já está cadastrado
        for(let item of tabela){

            if(cliente.cpf===item.DS_CPF){

                throw new Error('Este CPF já está cadastrado em nosso sistema');
            }

            else if(cliente.email===item.DS_EMAIL){

                throw new Error('Este email já está cadastrado em nosso sistema')
            }
        }

        const resposta=await addCliente(cliente);
        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

server.get('/locadora/cliente', async (req,resp) => {

    try{

        const resposta=await consultarClientes();

        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

server.get('/locadora/cliente/nome', async (req,resp) => {

    try{
        const nome=req.query.nome;
        const resposta=await consultarClientesNome(nome);

        resp.send(resposta);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

server.delete('/locadora/cliente/:id', async (req,resp) => {

    try{

        const id=req.params.id;
        const resposta=await deletarCliente(id);

        
        resp.send(`O cliente ${id} foi deletado dos registros`);
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});
export default server;