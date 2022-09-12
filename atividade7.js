const prompt = require ('prompt-sync')();

const a = Number (prompt ('Insira o valor de A: '))
const b = Number (prompt ('Insira o valor de B: '))
const c = Number (prompt ('Insira o valor de C: '))
const d = Number (prompt ('Insira o valor de D: '))
const e = Number (prompt ('Insira o valor de E: '))
const f = Number (prompt ('Insira o valor de F: '))


const x = ((c*e)-(b*f)) / ((a*e)-(b*d))
const y = ((a*f)-(c*d)) / ((a*e)-(b*d))

console.log (`\nEsste é o valor de x: ${x} \nEste é o valor de y ${y}`)