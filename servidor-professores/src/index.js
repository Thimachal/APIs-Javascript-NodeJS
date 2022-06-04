const express = require(`express`);
const {exibeProfessor,filtroProfessores} = require(`./controladores/professores`);
const validaSenha = require(`./intermediarios`);
const app = express();

//app.use(validaSenha);
app.get(`/professores/:identificador`,exibeProfessor);
app.get(`/professores`,filtroProfessores);

app.listen(3000);