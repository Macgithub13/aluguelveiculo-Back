import connection from "./connection.js";

export async function addCliente(cliente){

    let command=`
        INSERT INTO TB_CLIENTE(NM_CLIENTE,DS_EMAIL,DS_TELEFONE,DS_CPF,NR_CNH)
            VALUES(?,?,?,?,?);
    `;

    let [resp]=await connection.query[command,[cliente.nome,cliente.email,cliente.telefone,cliente.cpf,cliente.cnh]];

    return (resp);
}