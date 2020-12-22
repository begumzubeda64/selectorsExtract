let query = document.querySelectorAll(".lbl-licitacao, .field-content > p"); //get all the span and p elements required
let publicationDate = query[0].innerText; //get publication date value
let bidDate = query[8].innerText; //get bidding date value
let objVal = query[1].innerText + query[2].innerText; //get object value
let link = document.querySelectorAll('.item a'); //get all the links

console.log(query);
console.log(publicationDate);
console.log(bidDate);
console.log(objVal);
console.log(link);
