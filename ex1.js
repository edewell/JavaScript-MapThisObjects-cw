// // 1. Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` based on the elements in the array. Print the new array of objects.
// ```
let petTypes = ["dog", "cat", "pig", "hamster"];
let pet_objects = []; // new array to hold objects you produce

pet_objects = petTypes.map(
    (petnumber, pettype) => {
        return (
            {
                index: pettype,
                value: petnumber,
            }
        )
    }
)

console.log(pet_objects);