module.exports = function (app) {
    this.home = (req, res) => res.render('index', {erros: {}});
    return this;
};