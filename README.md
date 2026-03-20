# CompeticoesSenac


## **Descrição**

Sistema de gerenciamento de produtos para futura loja. Contém as propriedades de adição, visualização, exclusão e edição de produtos via API.

## **Estrutura do Sistema**
### Técnologias utilizadas:
> Front-end: HTML, CSS, JavasCript e Bootstrap para estilização;   
> Back-end: JavaScript e Node.js puros;  
> Banco de dados: MySQL;

## **Modelagem do Banco** 

``` 
 CREATE DATABASE sistema_produtos;
 USE sistema_produtos;

 CREATE TABLE produtos (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(245),
    descricao VARCHAR(245),
    preco DECIMAL(10,2),
    estoque INT,
    categoria VARCHAR(245)
 )

 ```
