const prompt = require ('prompt-sync') ();

const a = Number (prompt ('O valor de A: '));
const b = Number (prompt ('O valor de B: '));
const c = Number (prompt ('O valor de C: '));


 const r = Math.pow (a + b, 2.0)
 const s = Math.pow (b + c, 2.0)
 const d= (s + r)/ 2
 
 console.log (` \nO valor de R é: ${(r)} \nO valor de S é: ${s} \nO valor de D é: ${d}`)
