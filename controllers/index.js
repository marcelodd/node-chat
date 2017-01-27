module.exports = function (app) {
    this.home = (req, res) => res.render('index');
    return this;
};