let widths = [60, 40, 55, 75, 64];
let first = [];
let second =[];

 widths.forEach (function (value,index) {
     if (index % 2 === 0){
         first.push(value);         
     } else {
        second.push(value)
     }
 });
let firstSum =0;
let secondSum = 0;
 first.forEach(function (value){
     firstSum += value;
 });

second.forEach(function (value){
     secondSum += value;
 });
 console.log(secondSum);
 console.log(firstSum);
