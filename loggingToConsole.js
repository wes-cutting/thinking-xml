let greeting = "Hello Mr World"
console.log(greeting)
let greetings = greeting.split(" ")
console.log(greetings[0] + ' ' + greetings[1] + ' ' + greetings[2])


let stringArray = ['Blue', 'Humpback', 'Beluga'];
console.log('stringArray:', stringArray.join());


let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

let compare = (a,b) => {
  return a.value - b.value;
}
items.sort( compare );

items.sort(function (a, b) {
  return a.value - b.value;
});


// the array to be sorted
let list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
console.log(list.sort())

// temporary array holds objects with position and sort-value
let mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
console.log(mapped[0])
console.log(mapped[1])
console.log(mapped[2])
console.log(mapped[3])
console.log(mapped)

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// let list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// container for the resulting order
let result = mapped.map(function(el){
  console.log(el.index)
  console.log(el.value)
  return list[el.index];
});

console.log(result)