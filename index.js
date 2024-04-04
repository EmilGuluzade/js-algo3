//! 1. Prompt vasitesile daxil olunmush ededin faktorialini tapin.

// let num = parseInt(prompt("eded daxil edin :"));

// let factorial = 1;

// if (num == 0) {
//   console.log(1);
// } else if (num < 0) {
//   console.log("menfi eded olmaz!");
// } else {
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   console.log(factorial);
// }

//! 2.Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.
// let arr = [2,4,6,7,10,12,58,9];

// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[maxIndex]) {
//     maxIndex = i;
//   }
//   if (arr[i] < arr[minIndex]) {
//     minIndex = i;
//   }
// }

// let temp = arr[maxIndex];
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = temp;

// console.log(arr);

//!3.Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.
// let arr = [2,4,6,7,10,12,58,9];
// let largestOdd = null;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0 && arr[i] > largestOdd) {
//     largestOdd = arr[i];
//   }
// }
// if (largestOdd==null) {
//     console.log("tek eded yoxdu")
// } else {
//     console.log("en boyuk tek eded " +largestOdd)
// }


//!4. Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.Example:[123,7,53,99] -> (123 + 7) /2 -> 65
// let arr = [2,4,6,7,10,12,58,9];

// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[maxIndex]) {
//     maxIndex = i;
//   }
//   if (arr[i] < arr[minIndex]) {
//     minIndex = i;
//   }
// }


// console.log((arr[maxIndex]+arr[minIndex])/2)



//!5. arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function

// let arr = [2,4,6,7,10,12,58,9];

// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[maxIndex]) {
//     maxIndex = i;
//   }
//   if (arr[i] < arr[minIndex]) {
//     minIndex = i;
//   }
// }



// let sum = 0;
// for (let i = 0; i <arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum-arr[maxIndex]-arr[minIndex])

