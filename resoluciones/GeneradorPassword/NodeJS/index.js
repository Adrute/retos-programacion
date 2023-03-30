var readline = require('readline-sync');
var resources = require('./resources.js');

var generatedPassword = '';

/* REQUISITOS */
console.log('### REQUISITOS ###\n');
let longPassword = parseInt(readline.question("Longitud de 8 a 16: "));

if (!longPassword || (longPassword < 8 || longPassword > 16)) {
    console.log("\n### [ERROR] Introduce un valor válido.");
    process.exit(1);
}
let mayusc = readline.question("¿Quiere que contenga mayúsculas? (Y/N): ").toUpperCase();

if (mayusc != 'Y' && mayusc != 'N') {
    console.log("\n### [ERROR] Solo se admiten los valores Yy o Nn.")
    process.exit(1);
}

let wantNumbers = readline.question("¿Quiere que contenga números? (Y/N): ").toUpperCase();

if (wantNumbers != 'Y' && wantNumbers != 'N') {
    console.log("\n### [ERROR] Solo se admiten los valores Yy o Nn.")
    process.exit(1);
}

let wantSymbols = readline.question("¿Quiere que contenga símbolos? (Y/N): ").toUpperCase();

if (wantSymbols != 'Y' && wantSymbols != 'N') {
    console.log("\n### [ERROR] Solo se admiten los valores Yy o Nn.")
    process.exit(1);
}

/* GENERAMOS PASSWORD */
var chain = '';
(mayusc == 'Y') ? chain=resources.letters : chain=resources.letters.toLowerCase();

if (wantSymbols == 'Y')
    chain+=resources.symbols;

if (wantNumbers == 'Y')
    chain+=resources.numbers;

for (var index = 0; index <= longPassword; index++) {
    generatedPassword += _getRandomCharacter(chain);
}

function _getRandomCharacter(chain) {
    var result = '';
    var longChain = chain.length;

    result = chain.charAt(Math.floor(Math.random() * longChain));
    return result;
}

console.log('###################');
console.log('Tu nueva password: ' + generatedPassword);
