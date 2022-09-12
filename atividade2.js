const prompt = require ('prompt-sync') ();


const totalDias = Number (prompt ('Ecreva o total de dias que já viveu: '));


const anos =  totalDias/365
const meses = (totalDias % 365) / 30
const dias = (totalDias % 365) % 30



console.log (`\nEcreva o total de dias que já viveu: \nAnos: ${Math.floor(anos) }  \nMeses: ${Math.floor(meses)} \nDias: ${Math.floor(dias)}`)




