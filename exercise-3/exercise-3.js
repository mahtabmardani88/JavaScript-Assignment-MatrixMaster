// Exercise 1

// let age=19;
// const chackAge=age>18 ? true: confirm('Do you have your parents permission to access this page?');
// console.log(chackAge);


// Exercise 2

// let y=1;
// function pow (x,n) {
//     for(let i = 0 ; i< n; i++){
//         y *= x;
//     }
//    return y;
//     // body
// }
// console.log(pow(3,2));
// console.log(pow(3,3));
// console.log(pow(1,100));
// pow(3, 2) = 3 * 3 = 9;
// pow(3, 3) = 3 * 3 * 3 = 27;
// pow(1, 100) = 1 * 1 * ...* 1 = 1;


// =======================================

// Exercise 3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
//   }
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed.") },
//     function() { alert("You canceled the execution.") }
//   )
//  let ask=(question, yes, no)=>(confirm(question) ? yes : no());

// =======================================
 
// Exercise 4

// let calculator ={
//    read(){
//     this.val1=Number(prompt("enter the first value"));
//     this.val2=Number(prompt("enter the second value"));
//    },
//    sum(){
//    return this.val1 + this.val2;
//    },
//    mul(){
//     return this.val1 * this.val2;
//    }
// };

// =======================================

// Exercise 5

// let min=(a,b)=> a< b ? a : b; 
// console.log(min(5,9));