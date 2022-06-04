let {identificadorAula, instrutores, aulas} = require(`../bancodedados`);

const cadastrarAula = (req, res) => {
    const{idInstrutor} = req.params;
    const{titulo, descricao} = req.body;

    const procuraInstrutor = instrutores.find((instrutor) =>{
        return instrutor.id == idInstrutor;
    });
    if (!procuraInstrutor){
        return res.status(400).json({mensagem: `Instrutor não existe`});
    }
    if(!titulo){
        return res.status(400).json({mensagem: `Titulo não foi informado`});
    }
    if(!descricao){
        return res.status(400).json({mensagem: `Descrição não foi informada`});
    }

    const aula ={
        id: identificadorAula++,
        instrutor_id:Number(idInstrutor),
        titulo,
        descricao
    }
    aulas.push(aula);
    return res.status(201).json(aula);
}

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
}

const obterAula = (req, res) => {
    const {id} = req.params;
    const aula = aulas.find((aula) =>{
        return aula.id === Number(id);
    });
    if(!aula){
        return res.status(400).json({mensagem: `Aula não encontrada`});
    }
    res.status(200).json(aula);
}

const obterAulasInstrutor = (req, res) => {
    const {idInstrutor} = req.params;
   
    const procuraInstrutor = instrutores.find((instrutor) =>{
        return instrutor.id === Number(idInstrutor);
    });

    if (!procuraInstrutor){
        return res.status(400).json({mensagem: `Instrutor não existe`});
    }

    const aulasEncontradas = aulas.filter((aula) =>{
        return aula.instrutor_id === procuraInstrutor.id;
    });
  
    res.status(200).json(aulasEncontradas);
}

module.exports = { cadastrarAula,listarAulas, obterAula,obterAulasInstrutor};