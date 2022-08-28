//Utilizando o módulo npm roman-numerals, facilita a conversão de números//

//Modo 01:
//Esse modo é mais uma tentativa de acertar a conversão com a interação de JS com HTML, não realizei a tarefa 100% mas peço ajuda na resolução pra esse código, pois, todos os vídeos que assisti ninguém trabalha com o npm roman-numerals. Infelizmente estou sem apoio, se algum DEV puder me ajudar ficarei grato. Os código que vi são muito longos pra algo tão simples(a conversão, não o código)

var toArabic = require('roman-numerals').toArabic;
['X'].forEach(function chamar (x, i) {
    ('%d: %s', i, toArabic(x));
    captar = document.getElementById('valor01').value;
    document.getElementById('digito01').innerHTML = captar;
});

var toRoman = require('roman-numerals').toRoman;
[42].forEach(function chamar02(x, i) {
    ('%d: %s', i, toRoman(x));
    captar = document.getElementById('valor02').value;
    document.getElementById('digito02').innerHTML = captar;
});


//Modo 02, Esse modulo pega no CMD:

var letra= 'X'
var numero= 7

const toArabic = require('roman-numerals').toArabic
const toRoman = require('roman-numerals').toRoman

console.log(toArabic(letra));
console.log(toRoman(numero));