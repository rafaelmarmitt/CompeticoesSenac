import db from '../config/db.js'

export const listarProdutos = (req,res) => {

    db.query('SELECT * FROM produtos', (err, results) => {

        if(err) return res.status(500).json ({erro:'Erro ao listar produtos'});
        res.json(results)
    })
}

export const inserirProdutos = (req,res) => {

    const { nome, descricao, preco, estoque, categoria} = req.body;
    const sql = 'INSERT INTO produtos (nome, descricao, preco, estoque, categoria) VALUES (?, ?, ?, ?, ?)'
    db.query(sql, [nome, descricao, preco, estoque, categoria], err => {

        if(err) return res.status(500).json ({erro:'Erro ao inserir produto'});
        res.json({mensagem:'Produto inserido com sucesso!'})
    });
};

export const atualizarProduto = (req,res) => {

    const { id } = req.params;
    const {  nome, descricao, preco, estoque, categoria} = req.body;
    const sql = 'UPDATE produtos SET nome=?, descricao=?, preco=?, estoque=?, categoria=? WHERE id=?'
    db.query(sql,  [nome, descricao, preco, estoque, categoria, id], err => {

        if(err) return res.status(500).json ({erro:'Erro ao atualizar produto'});
        res.json({mensagem:'Produto atualizado com sucesso!'})
    });
}