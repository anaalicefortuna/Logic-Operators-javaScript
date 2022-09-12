const prompt = require ('prompt-sync') ();

const totalSegundos = Number (prompt ('Escreva total de segundos:'));


const horas = (totalSegundos / 3600)
const min = (totalSegundos / 60)
const segundos = (totalSegundos) 

console.log (` \nO tempo de duração do evento: ${Math.floor(horas)} \nO evento durou minutos: ${Math.floor(min)} \nO evento durou segundos ${Math.floor(segundos)}`)
