const LoginModel = require('../models/loginModel');
const jwt = require('jsonwebtoken');

module.exports = {
    
    async login(req, res){
        try {
            const usuario = await LoginModel.findOne({ where: { usuario: req.body.usuario, senha: req.body.senha } });
            if(usuario) {
              const id = usuario.id; 
              const token = jwt.sign({ id }, "06c219e5bc8378f3a8a3f83b4b7e4649", {
                expiresIn: 300
              });
              return res.json({ auth: true, token: token });
            } else {
              res.status(500).json({message: 'Login inválido!'})
            }
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    }

}