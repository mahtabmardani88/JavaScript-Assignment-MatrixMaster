// // =====================================================================================================================================================
//          Find the longest Word in a String
// // =====================================================================================================================================================
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms, you are allowed to use the split() method.
// findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
// findLongestWord("May the force be with you")  // should return 5.

// function longestWordInString(sizeword){
//   let word = sizeword.split(' ');
//   let maxLengthWord = 0 ;
//   for (let i = 0; i < word.length; i++) {
//     if(word[i].length > maxLengthWord){
//       maxLengthWord = word[i].length;
//     }
//   }
//   return maxLengthWord;
// }
// console.log(longestWordInString("The quick brown fox jumped over the lazy dog")); // Returns 6
// console.log(longestWordInString("May the force be with you")); // Returns 5



// // =====================================================================================================================================================
//         Largest Number in Arrays
// // =====================================================================================================================================================
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// //Returns [5,27,39,1001]
// // ============================
// function largestNumber(arr){
//   let result=[];
//   for (let i = 0; i < arr.length; i++) {
//     let array= arr[i];
//     let maxNumberInArray= array[0];
//     for (let j = 0; j < array.length; j++) {
//       if(array[j]>maxNumberInArray){
//         maxNumberInArray= array[j];
//       }
//     }
//     result.push(maxNumberInArray);
//   }
//   return result;
// }
// console.log(largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));