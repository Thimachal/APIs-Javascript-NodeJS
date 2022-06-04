let {instrutores,identificadorInstrutor} = require(`../bancodedados`);

//listar todos os instrutores
const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}

//listar instrutor por id
const obterInstrutor = (req, res) => {
    const {id} = req.params;

    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id == Number(id);
    
    });
    if(!instrutor) {
        return res.status(404).json({mensagem: `Instrutor não encontrado`});
    }
    return res.status(200).json(instrutor);  
}

//cadastrar instrutor
const cadastrarInstrutor = (req, res) => {
    const {nome, email, status} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: `O nome é obrigatório`});
    }
    if(!email ){
        return res.status(400).json({mensagem: `O e-mail é obrigatório`});
    }
    if(!status){
        return res.status(400).json({mensagem: `O status é obrigatório`});
    }
    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }
    instrutores.push(instrutor);
    return res.status(201).json(instrutor);

}

//atualizar instrutor
const atualizarInstrutor = (req, res) => {
    const {id} = req.params;
    const {nome, email, status} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: `O nome é obrigatório`});
    }
    if(!email ){
        return res.status(400).json({mensagem: `O e-mail é obrigatório`});
    }
   

    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id == Number(id);
    
    });
    if(!instrutor) {
        return res.status(404).json({mensagem: `Instrutor não encontrado`});
    }
    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();

}
//atualizar status do instrutor pontualmente
const atualizarStatusInstrutor = (req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id == Number(id);
    
    });
    if(!instrutor) {
        return res.status(404).json({mensagem: `Instrutor não encontrado`});
    }
   
    instrutor.status = status;

    return res.status(204).send();
}

//deletar instrutor
const excluirInstrutor = (req, res) => {
    const {id} = req.params;

    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id == Number(id);
    
    });
    if(!instrutor) {
        return res.status(404).json({mensagem: `Instrutor não encontrado`});
    }

    instrutores = instrutores.filter((instrutor) =>{
        return instrutor.id != Number(id);
    
    });

    return res.status(204).send();
}

module.exports = {listarInstrutores,obterInstrutor,cadastrarInstrutor,atualizarInstrutor,atualizarStatusInstrutor,excluirInstrutor};