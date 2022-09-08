const req = require("express/lib/request")

const admins = ["Ada", "Greta", "Vim", "Tim"]


const userAdmin = (req, res, next) =>{
    admins.forEach((nombre)=>{
        if(nombre===req.query.user){
            next()
        } else{
            res.send("No tiene permiso de administrador")
        }
    })
}

module.exports = userAdmin