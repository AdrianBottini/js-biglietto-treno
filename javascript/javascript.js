const kilometers = parseFloat (prompt("Train Ticket.com! Quanti chilometri devi percorrere oggi?"));
var price = parseFloat(kilometers * 0.21).toFixed(2);
console.log ("Il prezzo del biglietto è", price, "€");
const age = parseInt(prompt("Quanti anni hai?"));
if (age < 18) {
    var newprice = parseFloat(price * 0.80).toFixed(2);
    console.log("Essendo sotto 18 hai diritto ad uno sconto del 20%. Il prezzo del biglietto è", newprice, "€");
}
else if (age > 65) {
    var newprice = (price * 0.60);
    console.log("Essendo sopra 65 hai diritto ad uno sconto del 40%. Il prezzo del biglietto è", newprice, "€");
}
else {
    console.log("Non è applicato nessun sconto")
}