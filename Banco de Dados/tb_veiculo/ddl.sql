Select 	ID_VEICULO,
		DS_MODELO,
		NM_MARCA,
		DS_ANO,
        DS_PLACA
        FROM TB_VEICULO;
        
insert into TB_VEICULO(DS_MODELO,NM_MARCA,DS_ANO,DS_PLACA)
			VALUES(?,?,?,?);
            
Select ID_VEICULO,DS_MODELO,NM_MARCA,DS_ANO,DS_PLACA
		FROM TB_VEICULO
			WHERE DS_MODELO like ('%?%')
            AND NM_MARCA like ('%?%')
            AND DS_PLACA like ('%?%');

DELETE from TB_VEICULO
		WHERE ID_VEICULO=?;
        
Update TB_VEICULO
	Set DS_MODELO=?,
		NM_MARCA=?,
        DS_ANO=?,
        DS_PLACA=?
	Where ID_VEICULO=?; 