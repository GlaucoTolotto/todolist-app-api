//module.exports = {getAtivdades, postAtividades}


// function getAtivdades(app){
//     app.get('/todolist/atividade', (req, res) => {
//     res.send(`<h1>Rota ativada com GET e recurso "ATIVIDADES"</h1>
//                 <ul>
//                     <li>Escovar os dentes</li>
//                     <li>Assistir a aula</li>
//                     <li>Almoçar</li>
//                     <li>Descançar</li>
//                 </ul>
//     `)
// })}

// function postAtividades (app){
//     app.post('/todolist/atividade', (req,res)=> {
//         res.send('1234')
//     })
// }

const Tarefas = require('../model/tarefasModel');
class TarefasController {
    constructor(Database){
        this.Database = Database;
    }
    
    show = (res, req)=>{
        res.send(this.Database)
    }
    
    store = (res,req) => {
        const maisUmaTarefa = new Tarefas(
            "Estudar",
            "Estudar muito, pois tera que ser alguem na vida",
            "Tamo quase",
            "15/03/2020"
            );
            
            this.Database.push(maisUmaTarefa);
            res.send(maisUmaTarefa)
        }
    }

    module.exports = TarefasController;
    