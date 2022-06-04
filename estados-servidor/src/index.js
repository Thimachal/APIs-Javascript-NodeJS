const express = require(`express`);
const {mostraEstado, filtraEstado}= require(`./controladores/estados`);
const validarSenha = require(`./intermediarios`);

const app = express();

app.use(validarSenha);

app.get(`/estados`,filtraEstado);
app.get(`/estados/:id`,mostraEstado);



app.listen(3000);
