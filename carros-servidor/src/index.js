const express = require(`express`);
const {mostraCarros,filtroDeCarros} = require(`./controladores/carros`);
const validaSenha = require(`./intermediarios`);
const app = express();


app.use(validaSenha);
app.get(`/carros/:id`,mostraCarros);
app.get(`/carros`,filtroDeCarros);

app.listen(3000);