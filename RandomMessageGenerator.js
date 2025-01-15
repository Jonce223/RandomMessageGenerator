const words = ['Hello','What`s up?', 'How are you doing?','Good day!'];
const words2= ['How`s your season?','How`s your day?', 'How are you doing?'];
const words3=['All right, good bye!', 'Have a nice day!', 'Don`t give up!'];

let x = Math.floor(Math.random() * words.length);
let y = Math.floor(Math.random() * words2.length);
let z = Math.floor(Math.random() * words3.length);

console.log(words[x]+ " "+ words2[y]+ " "+ words3[z]);