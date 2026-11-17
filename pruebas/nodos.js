const Nodo = require("../src/Nodo")

const att1= new Nodo({motivo:"vacunación", fecha:"02/02", veterinario:"Dra.Rios", precio:"85.000"})
const att2 = new Nodo({motivo:"Control de peso", fecha:"15/03", veterinario:"Dra.Gómez", precio:"40.000" })
const att3 = new Nodo({motivo:"Limpieza dental", fecha:"20/05", veterinario:"Dra.Gómez", precio:"150.000"})

att1.siguiente = att2;
att2.siguiente = att3;
att3.siguiente = null
const cabeza = att1;
while{
 
}