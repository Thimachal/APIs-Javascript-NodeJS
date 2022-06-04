const carros = require("../bancodedados");

const mostraCarros = (req, res) => {
    const filtroCarros = carros.filter((carro) => {
        return carro.id === Number(req.params.id); 
    });
    res.send(filtroCarros);
};


const filtroDeCarros = (req, res) => {
    let filtrando = carros;
    const {marca,cor} = req.query;
    if(marca){
        filtrando = carros.filter((carro)=>{
            return carro.marca === marca;      
    });
    }
    if(cor){
        filtrando = carros.filter((carro)=>{
           return carro.cor === cor; 
        });
    }
    res.send(filtrando);
}

module.exports = {mostraCarros, filtroDeCarros};