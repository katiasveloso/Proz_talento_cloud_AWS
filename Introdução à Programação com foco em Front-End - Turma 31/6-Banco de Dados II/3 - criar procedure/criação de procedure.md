##  Instruções do projeto


Uma empresa de vendas tem um banco de dados com informações sobre os seus produtos.
 Ela precisa criar um relatório que faça um levantamento diário da quantidade de produtos 
 comprados por dia. Para ajudar a empresa, crie um procedure para agilizar esse processo.

´´´sql 

CREATE TABLE vendas (
    idVenda SERIAL PRIMARY KEY,
    idProduto INT,
    quantidade INT,
    dataVenda DATE
);

CREATE TABLE relatorio_diario (
    data DATE,
    total_produtos INT
);

´´´

### Aqui está a procedure para calcular e inserir o total de produtos vendidos em cada data.

´´´sql 
CREATE OR REPLACE PROCEDURE gerar_relatorio_diario()
LANGUAGE plpgsql
AS $$
BEGIN
    -- Limpa a tabela de relatório para evitar duplicação de dados
    TRUNCATE TABLE relatorio_diario;

    -- Insere o total de produtos vendidos por dia no relatório diário
    INSERT INTO relatorio_diario (data, total_produtos)
    SELECT dataVenda, SUM(quantidade)
    FROM vendas
    GROUP BY dataVenda
    ORDER BY dataVenda;
END;
$$;

´´´