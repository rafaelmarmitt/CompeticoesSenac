const API_URL = 'http://localhost:3000/produtos'

async function carregarProdutos() {

    const response = await fetch(API_URL)
    const produtos = await response.json();

    const tabela = document.getElementById('tabelaProdutos');
    tabela.innerHTML = '';

    produtos.forEach(prod => {

        const tr = document.createElement('tr')
        tr.innerHTML = `
        
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>${parseFloat(prod.preco).toFixed(2)}</td>
            <td>${parseInt(prod.estoque)}</td>
            <td>${prod.categoria}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="editarProduto(${prod.id}, '${prod.nome}', '${prod.descricao}', ${prod.preco}, ${prod.estoque}, '${prod.categoria}')">Editar</button>
                 <button class="btn btn-primary btn-sm" onclick="excluirProduto(${prod.id})">Excluir</button>
            </td>
        `; tabela.appendChild(tr)
    });
}

document.getElementById('formProdutos').addEventListener('submit', async (e) => {

    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;
    const categoria = document.getElementById('categoria').value;

    const produto = { id, nome, descricao, preco, estoque, categoria }

    if (id) {

        await fetch(`${API_URL}/${id}`, {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)

        })
    } else {
        await fetch(API_URL, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)

        })

    };
    e.target.reset();
    document.getElementById('id').value = '';
    carregarProdutos();
});


function editarProduto( id, nome, descricao, preco, estoque, categoria) {

    document.getElementById('id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('descricao').value = descricao;
    document.getElementById('preco').value = preco;
    document.getElementById('estoque').value = estoque;
    document.getElementById('categoria').value = categoria;

};

async function excluirProduto(id) {

    if (confirm('Deseja excluir este produto?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    }
    carregarProdutos();
}

carregarProdutos();