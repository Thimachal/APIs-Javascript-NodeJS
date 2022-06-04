const validaSenha = (req, res, next) => {
    const {senha} = req.query;
    if(!senha){
        return res.send(`Senha não informada`);
    }
    if(senha !== `carros123`){
        return res.send(`Senha inválida`);
    }
    next();
};

module.exports = validaSenha;