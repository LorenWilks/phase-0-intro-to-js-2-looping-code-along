// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]} , for the wonderful surprise gift!`);
 
  }

  return names;
}

writeCards(names);