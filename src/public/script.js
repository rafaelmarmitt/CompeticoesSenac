const API_URL = 'http://localhost:3000/produtos'

async function carregarProdutos() {
    
    const response = await fetch(API_URL)
    const produtos = await response.json();

    const tabela = document.getElementById('tabelaProdutos');
    tabela.innerHTML = '';

    produtos.forEach(prod => {

        const tr = document.createElement('tr')
        tr.innerHTML = `
        
            <td>${prod.id}</td>
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>${parseFloat(prod.preco).toFixed(2)}</td>
            <td>${prod.estoque}</td>
            <td>${prod.categoria}</td>
            <td>
                <button onclick="editarProduto(${prod.id}, '${prod.nome}', '${prod.descricao}', ${prod.preco}, ${prod.estoque}, '${prod.categoria}')">Editar</button>
                 <button onclick="excluirProduto(${prod.id}')">Excluir</button>
            </td>
        `; tabela.appendChild(tr)
    });
}

document.getElementById('formProdutos').addEventListener('submit', async(e) => {

    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;
    const categoria = document.getElementById('categoria')

    const produto = {nome, descricao, preco, estoque, categoria}

    if(id) {

        await fetch(`${API_URL}/${id}`, {

            
        }) 
    }
})