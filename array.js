const fruits = ["apple", "banana", "cherry"];

console.log(fruits[2]);

console.log(fruits);

fruits.push("grape");  //add element to end of array

console.log(fruits);

fruits.pop();  //remove last element

console.log(fruits);

console.log(fruits.length); //array length

console.log(fruits.indexOf("banana")); //index of element

console.log(fruits); // 3



//foreach loop
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//array travserse
nums.forEach(function(num)
{
    console.log(num);
});

// fetch even numbers using foreach
nums.forEach(function(num)
{
    if(num % 2 == 0)
    {
        console.log(num);
    }
});



//array map
const nums2 = [1, 2, 3, 4, 5];

const doubleNums = nums.map(function(key)
{
   //return odd numbers

    if(key % 2 != 0)
    {
         return key;
    }
});

console.log(doubleNums);



// use of filter

const nums3 = [1, 2, 3, 4, 5];

const oddNums = nums.filter(function(key)
{
    return key % 2 != 0;
});

console.log(oddNums);


const nums4 = [1, 2, 3, 4, 5];

//add all numbers using foreach
let sum = 0;

nums.forEach(function(num)
{
    sum = sum+num;
});

console.log(sum);








