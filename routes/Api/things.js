var express = require ('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({    
    "RTN": "",
    "Empresa": "",
    "Correo": "",
    "Rubro": "",
    "Direccion": "",
    "Telefono": ""
    });
});
router.put('/put/:rtn', function(req, res, next){
    var rtn =req.params.rtn;
    var modifiedEmp = null;
    datos = datos.map(
        function (dato, index){
            if (dato.rtn === rtn){
                modifiedEmp = Object.assign(dato, req.rtn)
                return modifiedEmp;
            }
            else{
                return dato;
            }
        }
    )
    res.json({

    });
});





module.exports = router;
