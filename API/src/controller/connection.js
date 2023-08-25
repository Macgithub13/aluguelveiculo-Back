import mysql from 'mysql2/promise';

const connection= await mysql.createConnection({

Host: process.env.HOST,
Usuario: process.env.USER,
Senha: process.env.PASSWORD,
Banco: process.env.DATABASE
});

console.log(`Conexão feita`);
export {connection};