const prompt = require ('prompt-sync') ();

const anos = Number (prompt ('Entre com a quantidade de anos:'));
const meses = Number (prompt ('Entre com a quantidade de meses:'));
const dias = Number (prompt ('Entre com a quantidade de dias:'));

const diasIdade = (anos*365) + (meses*30) + dias

        console.log (`\nTotal de dias vividos: ${diasIdade}`)
