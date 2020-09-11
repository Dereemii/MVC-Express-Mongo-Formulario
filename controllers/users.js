var User = require('../models/users'); 
/* req = request  res = response */
exports.user_create = function(req, res, next) {
  //
  if (req.body) {
    let items = req.body
    User.create(items, function(err, newUsers){ /* create de mongo para crear usuario */
      if(err) return res.json({ error: err }); /* si hay un error en la peticion imprimo error */
        res.json(newUsers)  /* si es positivo entro a new users y lo devuelve como JSON */
    });
  } 
  else {
    res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
  }
}