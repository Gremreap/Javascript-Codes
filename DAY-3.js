//Loops for JS

//For loop

let check=1;
for(let val=1;val<=5;val++)
{
    check*=val;
}

console.log("The value of check at end:",check);


//Sum of one to n numbers

let val=prompt("Enter the value upto which we need our sum:");
let sum=0;
for(let i=1;i<=val;i++)
{
    sum+=i;
}

console.log("The sum of 1 to n numbers:",sum);

//Infinite loop-Loop where there is no stopping condition(always true)-we try to avoid this

/*
for(let i=1;i>=0;i++)
{
    console.log(i);
}
*/

//While Loop-runs till our condition is true and after that it breaks

let value=5;
while(value>=0)
{
    console.log(value);
    value--;

    //updation  
}

console.log("Condition failed so loop of while terminated");

//do-while loop where condition been checked at the end (therefore if our condition doesnty match it would print atleast once on console)

let i=20;
do{
    console.log("Hi");
    i++;
}while(i<=10);


//sum of 10 numbers using do-while loop
let j=10;

let sumy=0;

do{
    sumy+=j;
    j--;
}while(j>=0);

console.log("The sum of first 10 numbers is:",sumy);


//for-of loop to get values from a string or an array

let str='HELLO';
let size=0;
for(let i of str)
{
   console.log(i);
   size++;
}


console.log("The size of string=",size);

//for in loop to get the values from an object or an array 


let student={
    name:"Gautam",
    class:'ENC',
    ispass:true,
    CGPA:8.0
};


for(let i in student)
{
    console.log('Key:',i,'Value:',student[i]);
}

//practice set for loops

for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log('value is=',i);
    }
}


//user guess game


let gamevalue=25;
let num=prompt("Guess the game number:");
while(num!=gamevalue)
{
  num=prompt("You guessed wrong number,try again:");
  //re-assigning the value to it
}
console.log("Right guessed");

 

//Strings in Js

let string="Hello world";
console.log(string[string.length-1]); 

//template literals to initiate our variables in a string easily(a string type)

let obj={
    item:"pen",
    price:10,
};

console.log("The cost of",obj.item,"is",obj.price,"rupees");

//now with literals

let out=`The cost of ${obj.item} is ${obj.price}`;
console.log(typeof out);
console.log(out);


//for new line and a space between strings 


console.log("Hello/n World");
console.log("Hello/t World");

//string methods or functions to manipulate a string

str.toUpperCase(out);
console.log(out);


//strings are immutable in js

str.toLowerCase(out);
console.log(out);


//to remove first and last spaces of string 
let strp="   Apna college  ";
console.log(strp.trim());

//string slice to get a part of a string where end index not included so take 1 index further

let stp="hello";
console.log(stp.slice(1,4));

//string concat of join 2 strings

let res1="apna";
let res2="college";

let z=res1.concat(res2);
console.log(z);

//string characters replace for only once 
let m="popoye";
str.replace("p","r");
//to replace all the characters

str.replaceAll("p","l");
console.log(m);

//printing practice on strings lec-3

let fullname=prompt("enter the name for the string:");
let valute="@"+fullname+fullname.length();
console.log(valute)