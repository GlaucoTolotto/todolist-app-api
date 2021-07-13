// module.exports = {getUsuarios, postUsuarios}

// function getUsuarios (app) {
//     app.get("/usuarios", (req,res) =>{
//         res.send('Usuario por get')
// })
// }

// function postUsuarios (app) {
//     app.post("/usuarios", (req,res) =>{
//         res.send('Usuario por post')
// })
// }

const Usuario = require('../model/usuariosModel');
class UsuarioController {
    constructor(Database) {
        this.Database = Database;
    }

    show = (res, req) => {
        res.send(this.Database);
    }

    store = (res, req) => {
        const maisUmaPessoa = new Usuario(
            "Glauco",
            "glaucotolotto@gmail.com",
            "slameubom"
        );

        this.Database.push(maisUmaPessoa);
        res.send(maisUmaPessoa)
    }
}

module.exports = UsuarioController;

