/**
* ===================================================
*   ESTE ES EL CONTROLLADOR DE ESTE SERVICIO
*   DESDE AQUI SE ATIENDEN TODAS LAS PETICIONES
*   QUE SE PUEDAN HACER DESDE LA APLICACION
* ===================================================
**/

var readfiles = require("../models/handlerFiles");
var path_files = "./public/files/csv/";

//  Aqui se obtiene todos los barrios de la ciudad de BSAS
exports.find_barrios = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try{
        var barrio = req.query.barrio;
        readfiles.read_Files(path_files + "barrios.csv",",;", function(data){
            if(barrio != undefined) {
                var barrioMayus = barrio.toUpperCase();
                var result;
                data.forEach(function(key){
                    if(key.BARRIO == barrioMayus) {
                        result = key;
                        return;
                    }
                });
                res.json(result);
            }else{
                res.json(data);   
            }
        });
    }catch(e) {
        console.log(e);
    }
};
//  Aqui se obtienen todos los cajeros automaticos de la ciudad
exports.find_cajeros = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "cajeros.csv",";", function(data){
            res.json(data); 
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen todos los hospitales de la ciudad
exports.find_hospitales = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "hospitales.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen todas las farmacias de la ciudad
exports.find_farmacias = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        var barrio = req.query.Barrio;
        readfiles.read_Files(path_files + "farmacias.csv",",", function(data){
            if(barrio != undefined) {
                var result = [];
                var index = 0;
                data.forEach(function(key){
                    if(key.Barrio == barrio) {
                        result[index] = key;
                        index++;
                    }
                });
                res.json(result);
            }else{
                res.json(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen los centros de reciclados en la ciudad
exports.find_centrosVerdes = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "centros-verdes.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen los recolectores de residuos de la ciudad
exports.find_recolectorResiduos = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "recoleccion-residuos.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen las seccionales policiales en la ciudad
exports.find_seccionesPoliciales = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "secciones-policiales.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen las comisarias de la policia federal en la ciudad
exports.find_comisariasFederal = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        var barrio = req.query.Barrio;
        readfiles.read_Files(path_files + "comisarias-policia-federal.csv",";", function(data){
            if(barrio != undefined) {
                var result = [];
                var index = 0;
                data.forEach(function(key){
                    if(key.barrio == barrio) {
                        result[index] = key;
                        index++;
                    }
                });
                res.json(result);
            }else{
                res.json(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen las comisarias de la policia metropolitana en la ciudad
exports.find_comisariasMetro = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        var barrio = req.query.Barrio;
        readfiles.read_Files(path_files + "comisarias-policia-metropolitana.csv",";", function(data){
            if(barrio != undefined) {
                var barrio_aux = barrio.toLowerCase();
                var barrio_mayus = barrio_aux.charAt(0).toUpperCase() + barrio_aux.slice(1);
                var result = [];
                var index = 0;
                data.forEach(function(key){
                    if(key.barrio == barrio_mayus) {
                        result[index] = key;
                        index++;
                    }
                });
                res.json(result);
            }else{
                res.json(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen los cuarteles de bomberos de la ciudad
exports.find_cuartelesBomberos = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "cuarteles-destacamentos-bomberos-policia-federal.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen los bancos Accesibles en la ciudad
exports.find_bancosAccesibles = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        var barrio = req.query.Barrio;
        readfiles.read_Files(path_files + "bancos-accesibles.csv",";", function(data){
            if(barrio != undefined) {
                var barrioMayus = barrio.toUpperCase();
                var result_array = [];
                var index = 0;
                data.forEach(function(key){
                    if(key.BARRIO == barrioMayus) {
                        result_array[index] = key;
                        index++;
                    }
                });
                res.json(result_array);
            }else{
                res.json(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se listan todos los establecimientos publicos dentro de la ciudad
exports.find_establecimientosP = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        var barrio = req.query.Barrio;
        readfiles.read_Files(path_files + "establecimientos-publicos.csv",";", function(data){
            if(barrio != undefined) {
                var barrioMayus = barrio.toUpperCase();
                var result_array = [];
                var index = 0;
                data.forEach(function(key){
                    if(key.barrio == barrioMayus) {
                        result_array[index] = key;
                        index++;
                    }
                });
                res.json(result_array);
            }else {
                res.json(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen las sedes de los registros civiles en la ciudad
exports.find_sedesRegistroCiviles = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "sedes-registro-civil.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se obtienen los centros para documentacion rapida
exports.find_CentroDocRapidos = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "centros-documentacion-rapida.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};
//  Aqui se listan las embajadas en la cuidad
exports.find_embajadas = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    try {
        readfiles.read_Files(path_files + "embajadas.csv",";", function(data){
            res.json(data);
        });
    } catch (e) {
        console.log(e);
    }
};