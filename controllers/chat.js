module.exports = function (app) {
    this.iniciaChat = (req, res) => {
        res.render('chat')
    }
    return this;
};