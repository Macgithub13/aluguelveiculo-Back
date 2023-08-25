show databases;
use infob_db;

show tables;
drop table tb_cliente;


create table TB_CLIENTE(

ID_CLIENTE		INT PRIMARY KEY auto_increment,
NM_CLIENTE		varchar(200),
DS_EMAIL		varchar(200),
DS_TELEFONE		varchar(20),
DS_CPF			varchar(13),
NR_CNH			INT
);