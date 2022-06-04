const validarSenha = (req,res, next)=>{
    const {senha} = req.query;

    if(!senha){
        return res.send(`A senha não foi informada`);
    }

    if(senha !== `estados123`){
        return res.send(`A senha informada não é válida`);
    };
    next();
};
module.exports = validarSenha;