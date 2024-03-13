const usuarioService = require('../services/usuariosService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let usuarios = await usuarioService.buscarTodos();
        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id, 
                nome: usuarios[i].nome,
                sobrenome: usuarios[i].sobrenome
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'Usuario não encontrado!', result:{}};

        let id = req.params.id;
        let usuario = await usuarioService.buscarUm(id);

        if(usuario){
            json.result = usuario;
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;

        if(nome && sobrenome){
            let usuarioId = await usuarioService.inserir(nome, sobrenome);
            json.result = {
                id: usuarioId,
                nome,
                sobrenome
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;

        if(id && nome && sobrenome){
            await usuarioService.alterar(id, nome, sobrenome);
            json.result = {
                id,
                nome,
                sobrenome
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) =>{
        let json = {error:'', result:{}};

        await usuarioService.excluir(req.params.id);

        res.json(json);
    }
};