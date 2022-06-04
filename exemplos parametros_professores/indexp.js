const  express = require(`express`);
const {filtrarProfessores,encontrarUmProfessor} = require(`./controladores/professores`);
const app = express();

//intermediario da rota
const primeiroIntermediario = (req, res, next)=>{
    console.log(`passei no primeiro intermediário`);
    //return res.send(`algo deu errado`);
    next();
};

const segundoIntermediario = (req, res, next)=>{
    console.log(`passei no segundo intermediário`);
    //return res.send(`algo deu errado`);
    next();
};

const intermediarioDaRota = (req, res, next) =>{
    console.log(`passei no intermediário da rota`);
    next();
}
app.use(primeiroIntermediario);
app.use(segundoIntermediario);
//antes de chegar nos parametros abaixo passa pelo intermediario acima, por isso tem que ficar antes como se fosse um filtro

//parametro de consulta
app.get(`/professores`,intermediarioDaRota, filtrarProfessores);//intermediaro independente para rota

//parametro de rota
app.get(`/professores/:id`,encontrarUmProfessor);

app.listen(3000);