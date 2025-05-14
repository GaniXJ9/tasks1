
//1) Implement a function that takes a string with nested parentheses (e.g., '((a(b)c))')
//  and returns the string with the deepest nested content removed.

let test1 = '((a(b)c))';
let test2 = 'a(b(cd)e)f';
let test3 ='(((x)))';
let test4 = '(a(b(c(d)e)f)g)'


function deleteDeepestNestedContent(str) {
  let depth = 0;
  let maxDepth = 0;


  for (const char of str) {
    if (char === '(') depth++;
    if (depth > maxDepth) maxDepth = depth;
    if (char === ')') depth--;
  }

  let result = '';
  depth = 0;


  for (const char of str) {
    if (char === '(') {
      depth++;
      result += char;
    } else if (char === ')') {
      result += char;
      depth--;
    } else {
      if (depth !== maxDepth) result += char;
    }
  }

  return result;
}


console.log(deleteDeepestNestedContent(test1));
console.log(deleteDeepestNestedContent(test2));
console.log(deleteDeepestNestedContent(test3));
console.log(deleteDeepestNestedContent(test4));
console.log(deleteDeepestNestedContent(test5));


//2) Write a function that merges two arrays without duplicates, maintaining their relative order.
// let numbers1 = [1 ,  2 , 3 , 3 , 4];

// let numbers2 = [3 , 4 , 5 , 5 , 7];

// function mergeArrayWithoutDupl(arr1, arr2){
//     let mergedArr =  [...arr1 , ...arr2];

//     let newArr = [];
//     mergedArr.forEach(num => {
       
//         if(!newArr.includes(num)){
//             newArr.push(num);
//         }
        
//     });
//     return newArr;
// }


// console.log(mergeArrayWithoutDupl(numbers1, numbers2))

//3)Implement a function to find the longest increasing subsequence in an array of numbers

// let number = [2 , 2 , 3 , 1 , 23 , 40 , 103 , 22 , 10];

// function LongestIncreasingSubsequence(arr){
//     let arrLength = arr.length;
//     let dp = Array(arrLength).fill(1)


// for(let i = 0 ; i < arrLength ; i++){
//   for(let j = 0; j < i ; j++){
//     if(arr[i] > arr[j]){
//         dp[i] = Math.max(dp[i] , dp[j]+1);
//     }
//   }
// }
// console.log(Math.max(...dp))
// }


// LongestIncreasingSubsequence(number);

//4)Create a function that receives a string and returns the first substring that contains all unique characters.

// let test1 = 'abcdfgfcdsedf';
// let test2 = 'aaaaa';
// let test3 = 'pwwkew';

// function firstSubstring(str){
//     let newStr = '';

//     for(let letter of str){
//         if(newStr.includes(letter)){
//            break;
//         }else{
//             newStr += letter
//         }
//     }
//     return newStr;
// }

// console.log(firstSubstring(test1))
// console.log(firstSubstring(test2))
// console.log(firstSubstring(test3))



//5)- Write a function to sort an array of objects by multiple keys (e.g., sort by age first, then by name).

// let students = [
//     {id: 1 , age: 18 , name: "Sanzhar"},
//     {id: 2 , age: 19 , name: "Olzhas"},
//     {id: 3 , age: 17 , name: "Nurali"},
//     {id: 4 , age: 20 , name: "Kainar"},
//     {id: 4 , age: 20 , name: "Aibar"},
//     {id: 5 , age: 22 , name: "Nursultan"},
//     {id: 6 , age: 21 , name: "Damir"},
//     {id: 7 , age: 22 , name: "Manas"},
// ]


// function sortStudents(student1 , student2){
//    if(student1.age !== student2.age ) {
//     return student1.age - student2.age;
//    }else{
//     return student1.name.localeCompare(student2.name);
//    }
// }


// console.log(students.sort(sortStudents))

