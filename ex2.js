// 2. Use ```.filter``` to create an array of pet objects that only holds the hamsters.

// ```
let pets = [
{
  name: 'Spot',
  type: 'Hamster'
},
{
  name: 'Harry',
  type: 'Hamster'
},
{
  name: 'Kitty',
  type: 'Cat'
}
]

// let hamsters = []; // new array to hold objects

let hamsters = pets.filter(
    (el) => {
       if (el.type == 'Hamster'){
       return (el.type);
       }
    }
    
)

console.log(hamsters);