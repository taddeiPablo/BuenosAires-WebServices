var express = require('express');
var router = express.Router();
var servicesBSASController = require('../controllers/servicesBSAS_controller');

router.post('/barrios', servicesBSASController.find_barrios);
router.get('/barrios', servicesBSASController.find_barrios);
router.get('/cajeros', servicesBSASController.find_cajeros);
router.get('/hospitales', servicesBSASController.find_hospitales);
router.get('/farmacias', servicesBSASController.find_farmacias);
router.get('/centrosVerdes', servicesBSASController.find_centrosVerdes);
router.get('/recoleccionResiduos', servicesBSASController.find_recolectorResiduos);
router.get('/seccionesPoliciales', servicesBSASController.find_seccionesPoliciales);
router.get('/comisariasFederal', servicesBSASController.find_comisariasFederal);
router.get('/comisariasMetro', servicesBSASController.find_comisariasMetro);
router.get('/cuartelesBomberos', servicesBSASController.find_cuartelesBomberos);
router.get('/Rampas', servicesBSASController.find_rampas);
router.get('/bancosAccesibles', servicesBSASController.find_bancosAccesibles);
router.get('/EstablecimientosP', servicesBSASController.find_establecimientosP);
router.get('/registrosCiviles', servicesBSASController.find_sedesRegistroCiviles);
router.get('/centroDocRapidos', servicesBSASController.find_CentroDocRapidos);
router.get('/Embajadas', servicesBSASController.find_embajadas);

module.exports = router;
