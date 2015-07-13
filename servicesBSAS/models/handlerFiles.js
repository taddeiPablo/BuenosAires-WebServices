/**
* ====================================================
*   MODULO CREADO PARA LEER Y TRANSFORMAR LA
    INFORMACION LEIDA DE LOS ARCHIVOS TIPO CSV
    ESTA INFORMACION ES PUBLICADA POR EL GCBS
* ====================================================
**/


//  funcion por la cual se lee el archivo y se transforma su
//  informacion al formato json
exports.read_Files = function(file, delimitadores, callback) {
    try {
        var fs = require('fs');
        var delimitador = delimitadores;
        fs.readFile(file, {encoding: 'utf-8'}, function (err, data) {
            if (err) throw err;
            var jsonData = transform(delimitador, data);
            callback(jsonData);
        });
    } catch (e) {
        console.log(e);
    }
};


//  funcion con la cual se transforma el archivo csv
//  a formato json
function transform(delimitador, data){
    var jsonObjects = [];
    //  aqui se transforman los csv que tengan como delimitador
    //  (,;)(;)(,)(;,)
    if(delimitador == ",;") {
        var lines = data.split("\n");
        var headers = lines[0].split("\t");
        for(var i = 1;i < lines.length;i++){
            var Object_json = {};
            var currentline = lines[i].split("\t");
            for(var j = 0;j < headers.length;j++){
                var columns = headers[0].split(',');
                var splitLine = currentline[j];
                var spliteValue = splitLine.split(';');
                var values = spliteValue[0].split(',');
                for (var index = 0; index < columns.length; index++) {
                    Object_json[columns[index]] = values[index];
                    if(index == 6){
                        Object_json[columns[index]] = spliteValue[1];
                    }
                }
            }
            jsonObjects.push(Object_json);
        }
    }else if(delimitador == ";" || delimitador == ",") {
        var lines = data.split("\n");
        var headers = lines[0].split("\t");
 
        for(var i = 1; i < lines.length; i++){
            var Object_json = {};
            var currentline = lines[i].split("\t"); 
            for(var j = 0;j < headers.length;j++){
                var columns = headers[0].split(delimitador);
                var splitLine = currentline[j];
                var values = splitLine.split(delimitador);
                for (var index = 0; index < columns.length; index++) {
                    Object_json[columns[index]] = values[index];
                }
            }
            jsonObjects.push(Object_json);
        }
    }else if(delimitador == ";,"){
        var lines = data.split("\n");
        var headers = lines[0].split("\t");
        for(var i = 1;i < lines.length;i++){
            var Object_json = {};
            var currentline = lines[i].split("\t");
            for(var j = 0;j < headers.length;j++){
                var columns = headers[0].split(',');
                var splitLine = currentline[j];
                var spliteValue = splitLine.split(';');
                var values = spliteValue[0].split(',');
                for (var index = 0; index < columns.length; index++) {
                    Object_json[columns[index]] = values[index];
                    if(index == 8){
                        Object_json[columns[index]] = spliteValue[1];
                    }
                }
            }
            jsonObjects.push(Object_json);
        }
    }
    return jsonObjects;
}