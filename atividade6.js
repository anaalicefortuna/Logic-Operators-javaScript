const prompt = require ('prompt-sync') ();

const x1 = Number (prompt ('Insira o valor de x1: '));
const x2 = Number (prompt ('Insira o valor de x2: '));
const y1 = Number (prompt ('Insira o valor de y1: '));
const y2 = Number (prompt ('Insira o valor de y2: '));


const d = Math.sqrt (Math.pow(x1-x2, 2) + Math.pow((y2-y1)), 2);


console.log (`\nA distância entre os pontos p1 ${x1}, ${y1} e p2 ${x2}, ${y2}`)
