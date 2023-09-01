import { connection } from './connection.js';

export async function addCliente(cliente){

    let command = `
    
    INSERT INTO tb_cliente(NM_CLIENTE,DS_EMAIL,DS_TELEFONE,DS_CPF,INT_CNH)
		VALUES(?,?,?,?,?)
    `;

    const [resp] = await connection.query(command,[cliente.nome,cliente.email,cliente.telefone,cliente.cpf,cliente.cnh]);
    cliente.id=resp.insertId;
    return cliente;
}

export async function consultarClientes(){

    let command=`
    Select 
        ID_CLIENTE,
        NM_CLIENTE,
        DS_EMAIL,
        DS_TELEFONE,
        DS_CPF,
        INT_CNH
    from tb_cliente
    `;

    const [resp]= await connection.query(command, []);

    return (resp);
}

export async function consultarClientesNome(nome){

    let command=`Select 
        ID_CLIENTE,
        NM_CLIENTE,
        DS_EMAIL,
        DS_TELEFONE,
        DS_CPF,
        INT_CNH
    from tb_cliente
    WHERE NM_CLIENTE like(?)`;

    const [resp]= await connection.query(command, [`%${nome}%`]);

    return (resp);
}

export async function deletarCliente(id){

    let command=`DELETE from TB_CLIENTE
                WHERE ID_CLIENTE=?`;

    const [resp]= await connection.query(command, [id]);

    return(resp);
}

export async function verifCliente(id){

    let command=`Select * from TB_CLIENTE
                WHERE ID_CLIENTE=?`;

    const [resp]=await connection.query(command,[id]);

    return(resp);
}

