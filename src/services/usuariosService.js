const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM usuarios', (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        })
    },

    inserir: (nome, sobrenome) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('INSERT INTO usuarios (nome, sobrenome) VALUES (?,?)',
                [nome, sobrenome],(error, results) =>{
                    if(error) {rejeitado(error); return;}
                    aceito(results.insertId);
            });
        });
    },

    alterar: (id, nome, sobrenome) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('UPDATE usuarios SET nome = ?, sobrenome = ? WHERE id = ?;',
                [nome, sobrenome, id],(error, results) =>{
                    if(error) {rejeitado(error); return;}
                    aceito(results);
            });
        });
    },

    excluir: (id) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query('DELETE FROM usuarios WHERE id = ?;',[id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },
};