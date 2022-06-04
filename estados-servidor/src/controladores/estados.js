const estados = require('../bancodedados');

const mostraEstado = (req, res) => {
    const exibe = estados.filter((estado) => {
        return estado.id === Number(req.params.id);
    });  
    res.send(exibe);
};

const filtraEstado = (req, res) => {
    const {nome,clima} = req.query;
    let resultado = estados;

    if(nome){
        resultado = estados.filter((estado) => {
            return estado.nome === nome;
        });
    }
    if(clima){
    resultado = estados.filter((estado) => {
        return estado.clima ===clima;
        });
    }
    res.send(resultado);
}

module.exports = {mostraEstado, filtraEstado};