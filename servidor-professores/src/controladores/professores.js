const res = require("express/lib/response");
const professores = require(`../bancodedados`);

//função1
const exibeProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor)=>{
            return professor.id === Number(req.params.identificador);
    });
    res.send(professorEncontrado);
};
//função2
const filtroProfessores = (req, res) =>{
    //desestruturação do objeto
    const {stack,nome} = req.query;//se tiver outras propriedades para desestruturar, por ex. ficaria {stack,nome, idade}
    let resultado = professores;//pode subsitiuir por um array vazio

    if(stack){
        resultado = professores.filter((professor)=>{
            return professor.stack === stack;
        });
    }
    if(nome){
        resultado = professores.filter((professor)=>{
            return professor.nome === nome;
        });
    }
    res.send(resultado);
    }
module.exports= {exibeProfessor,filtroProfessores};