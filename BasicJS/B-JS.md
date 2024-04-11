```javascript


// // JS Basic
// // -------------------
// 1.Print 1 - 135 
// Write a program using JavaScript that will print all the numbers from 1 to 135.

// for (let i = 1; i <= 135; i++) {
//    console.log(i);  
// }
// // ------------------------------------------------------------------------------------------------------
// 2. Print Odd Numbers 1 - 135
// Write a program using JavaScript that will print all the odd numbers from 1 to 135

// console.log("add zoj");
// for (let i = 0; i <=135; i++) {
//     if(i%2 == 0 ){
//         console.log(i);
//     }   
// }

// console.log(" add fard");
// for (let i = 0; i <=135; i++) {
//     if(i%2==1){
//         console.log(i);
//     } 
// }
// // ------------------------------------------------------------------------------------------------------
// 3. Sum of Printed Numbers
// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0
// Number is: 1 Sum: 1
// Number is: 2 Sum: 3
// Number is: 3 Sum: 6
// ...

// let num=0;
// let sum=0;
// for (let num = 0; num <= 135; num++) {
//    sum += num;
//     console.log("number is "+" "+ num+" " +"and sum is" +" " +sum);   
// }
// // ------------------------------------------------------------------------------------------------------
// 4. Print the elements of an array  
// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// let x = [1,4,2,12];
// console.log(x);
// for(let i = 0 ; i < x.length ; i++){
//     console.log(x[i]);
// }
// // ------------------------------------------------------------------------------------------------------
// 5.Find Max 
// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// console.log("max number");
// let x= [2,1,3];
// let max =0;
// for (let i = 0; i < x.length; i++) {
//     if(x[i] > max){
//         max = x[i];
//     }} 
//     console.log(max);

// console.log("min number");
// let y = [2,-3,-1];
// let min=0;
// for (let i = 0; i <y.length; i++) {
//     if(y[i]< min){
//         min = y[i];
//     }} 
//     console.log(min);
// // ------------------------------------------------------------------------------------------------------
// 6. Get Average
// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.
// let x = [2,1,3];
// let avarage =0;
// let sum = 0;
// for (let i = 0; i < x.length; i++) {
//     if(x[i] >0){
//         avarage += x[i];
//         sum = avarage / x[i];
//     }
// }  console.log(sum);
// // ------------------------------------------------------------------------------------------------------
// 7. Eliminate the Negatives
// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be
// [2,0,4,0]

// let x = [2,-1,4,-3];
// for (let i = 0; i < x.length; i++) {
//     if(x[i] < 0 ){
//         x[i]=" ";
//     } 
// }  console.log(x);
// // ------------------------------------------------------------------------------------------------------
// 8. Number to String
// Write a program that takes an array of numbers and turns the negative values into strings.
// For example,
// // For array 
// const x= [1,-4,0,-1]  
// The output should be [1,'Turing,0,'Turing'].

// const x= [1,-4,0,-1];
// for (let i = 0; i < x.length; i++) {
//     if(x[i]<0){
//         x[i]="turing";
//     }
    
// } console.log(x);