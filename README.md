# Competicoes Senac


## **Descrição**

Sistema de gerenciamento de produtos para futura loja. Contém as propriedades de adição, visualização, exclusão e edição de produtos via API.

## **Estrutura do Sistema**
### Técnologias utilizadas:
> Front-end: HTML, CSS, JavasCript e Bootstrap para estilização;   
> Back-end: JavaScript e Node.js puros;  
> Banco de dados: MySQL;

## **Modelagem do Banco** 

``` sql
 CREATE DATABASE sistema_produtos;
 USE sistema_produtos;

 CREATE TABLE produtos (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(245),
    descricao VARCHAR(245),
    preco DECIMAL(10,2),
    estoque INT,
    categoria VARCHAR(245)
 );
 ```
 ### Tabela:

 |Nome|Descrição|Preço|Estoque|Categoria|Ações|
 |---|---|---|---|---|---|
 |Stitch|Pelúcia stitch|99.9|20|Pelúcia| Editar/Excluir|

> Acabei criando só uma tabela, pois sabia como fazer as Foreign Keys, mas não estava seguro do seu funcionamento, então optei por fazer o input das categorias via select no HTML e com tipo de charactere de texto no banco.

## **Interface Web** 

Criei o front somente com HTML e bootsrap para a estilização, ele se conecta com a API do back via fetch(API_URL), onde ele puxa os dados e manipula eles em contato com o banco de dados.

![Tela](/img/print.png)

## **API** 

Endpoints: 

``` js
    app.use('/produtos', produtoRoutes);
```

Fiz somente um endpoint, pois no momento ainda não sei integrar mais de um endpoint no back.

## Execução do Projeto

Passo 1: 
Instalar o npm e suas dependências

```js
npm init -y

npm install express mysql2 dotenv
```

Fazer o banco de dados:

``` sql
CREATE DATABASE sistema_produtos;
 USE sistema_produtos;

 CREATE TABLE produtos (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(245),
    descricao VARCHAR(245),
    preco DECIMAL(10,2),
    estoque INT,
    categoria VARCHAR(245)
 );
```

Após isso é so iniciar o servidor via terminal:

```js
    node server.js
```

**Caso não esteja na pasta certa é so digitar no terminal:**

``` js
cd src
```


## **Dificuldades**
> [!NOTE]
> Acabei não conseguindo fazer o desafio surpresa, ainda não consigo fazer um sistema de login com verificação e puxar API's externas para o meu projeto;  
>
>Pesquisei como fazer e API externas de autenticação, mas não pude garantir o funcionamento dentro do tempo limite, por isso optei por não usa-las.