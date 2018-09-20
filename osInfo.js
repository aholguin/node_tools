/*
Funciones básicas de sistema escritas en un archivo plano
Basic System's functions written in a plain text
*/

const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let host = os.hostname();
let homeDir = os.homedir();

let textPlano = "Resumen del Sistema \n";

textPlano += "Su sistema Operativo es "+ sistema + " Versión: "+ os.release() +"\n";
textPlano += "Está trabajando con  "+ host + "\n";
textPlano += "Sobre la carpeta  "+ homeDir + "\n";
textPlano += "Su equipo cuenta con "+ cpu.length + " CPUs "+"\n";
textPlano += "Su equipo ha estado encendido durante "+ Math.round((os.uptime() / 60) / 60) + ' Horas' +"\n";

fs.appendFile('salida.txt', textPlano, function (err) {
    if (err) {
         console.log(err);
    }
});
