import { Router } from 'express';
import { addCliente, consultarClientes, consultarClientesNome, deletarCliente, alterarCliente } from '../repository/clienteRepository.js';

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

        if(resposta==0){

            throw new Error('Esse cliente não está registrado');
        }

        resp.status(204).send();
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

server.put('/locadora/cliente/:id', async (req,resp) => {

    try{

        const id=req.params.id
        const cliente=req.body;

        const resposta=await alterarCliente(cliente,id);

        if(resposta.affectedRows==0){

            throw new Error('Esse cliente não está registrado');
        }

        resp.status(204).send('');
    }

    catch(err){

        resp.status(404).send({
            erro:err.message
    })};
});

export default server;