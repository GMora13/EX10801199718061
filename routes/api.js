var express = require ('express');
var router = express.Router();

var userApi = require ('./api/Empresa');
var thingsApi= require ('./api/things');

router.use('/Empresa', userApi);
router.use('/things', thingsApi);

module.exports = router;
