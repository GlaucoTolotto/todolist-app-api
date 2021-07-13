const express = require('express');
const app = express();
const {APP_PORT} = require('./src/configuracao/config');
//const {getHandler} = require('./src/controller/status-controller.js');
const UsuarioController = require('./src/controller/usuariosController.js');
const TarefasController = require('./src/controller/tarefasController');
const Database = require('./src/infra/bd');

const ControleDeUsuario = new UsuarioController(Database.usuariosDB)
const ControleTarefas = new TarefasController(Database.tarefasDB)

app.use(express.json());

app.get('/usuario', ControleDeUsuario.show);
app.post('/usuario', ControleDeUsuario.store);

app.get('/tarefas', ControleTarefas.show);
app.post('/tarefas', ControleTarefas.store);

app.listen(APP_PORT, ()=> console.log(`Vai aparecer neste link http://localhost:1234`));