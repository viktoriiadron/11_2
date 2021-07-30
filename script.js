// 1
let vegetable = {
    name: 'onion',
    color: 'white',
}

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

// 2

const { shape = 'round' } = vegetable;
console.log(`${name}s are usually ${shape}`);
// нужно было vegetable.shape = 'round'
// 3

let vegetables = [
    {
        name: 'cucumber',
        color: 'green',
    },
    {
        name: 'tomato',
        color: 'red',
    } 
]


const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

// 4

let students = [
  { name: 'Kate', age: 25 },
  { name: 'Artur', age: 30 },
  { name: 'Nick', age: 15 },
  { name: 'Alex', age: 28 },
  { name: 'Zhenia', age: 45 },
];

let [, secondStudent, ...otherStudents] = students;
console.log(`The second students object is ${secondStudent}, ${otherStudents.length} students left`);