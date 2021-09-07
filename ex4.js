// #### Exercise 4: 
// Use `map` to take an array of words in lower-case and returns an array of the strings where *every other word* is in all caps. Then use `foreach` to print out the new array.


// ex: 
// `hey pal, lets javascript together sometime` // => "HEY pal, LETS javascript TOGETHER sometime"

const wordArray = ['lets code together and have fun'];

let chnge = wordArray.map(
    (idx) => {
        for (i = 0; i < idx.length; i += 2)
            idx.charAt(i).toUpperCase;
            return idx;
      }
      
)


chnge.forEach(
    (idx) => {
        console.log(idx);
    }
)