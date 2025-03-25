const marvel_heroes = ["Thor","Ironman", "Spiderman" ];
const dc_heroes = ["Batman", "Superman", "Flash"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//const all_heroes = marvel_heroes.concat(dc_heroes)

// const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);

const newArr = [1,2,3,[4,5],6,[7,8,[9,10]]];
const newArr1 = newArr.flat(Infinity);
console.log(newArr1);
console.log(Array.isArray(newArr1));

console.log(Array.isArray("Shakir"));
console.log(Array.from("Shakir"));

let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1,s2,s3));
