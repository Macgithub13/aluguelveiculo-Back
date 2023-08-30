create table TB_LOCACAO(

ID_LOCACAO			INT primary key auto_increment,
ID_CLIENTE_LOCACAO	INT,
ID_VEICULO_LOCACAO	INT,
DT_LOCACAO			DATE,
DS_KM_RETIRADA		varchar(100),

Foreign Key (ID_CLIENTE_LOCACAO) references TB_CLIENTE(ID_CLIENTE),
Foreign Key (ID_VEICULO_LOCACAO) references TB_VEICULO(ID_VEICULO)
);