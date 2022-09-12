
const prompt = require ('prompt-sync') ();

const fabrica =  prompt ('Custo de Fábrica');


const distribuicao = 28/100
const imposto = 45/100
const carro = (fabrica *( distribuicao + imposto))/100+fabrica

console.log (`"\nEsse é o valor total do carro: " ${carro}`)
