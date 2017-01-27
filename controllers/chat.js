module.exports = function (app) {
    this.iniciaChat = (req, res) => {
        var body = req.body;
        req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
        req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

        var erros = req.validationErrors();
        if (erros) {
            res.render('index', {erros: erros});
            return;
        }

        var io = app.get('io');

        app.get('io').emit('msgParaCliente', {apelido: body.apelido, mensagem: ' acabou de entrar no chat'});

        res.render('chat', {user: body.apelido});
    }
    return this;
};