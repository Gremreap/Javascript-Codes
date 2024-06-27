console.log("Hello world");

//this is a single line comment(not been executed on console )

/* this is a multiline comment*/


/*Operators in Javascript*/

/*Arithmatic operators*/

//"use strict-depicts that we need to add let,var,const everytime when we define variables"

//type of null in primitive datatype is an object(non primitive datatype)

let a=5;
let b=2;
console.log("a=",a, "& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
 console.log("a*b=",a*b);
 console.log("a/b=",a/b); 
 console.log(a%b);
 console.log("a exponetial b:",a**b);


 //Unary operators
console.log("Post Increament of a is:",a++);
//now a=a+1 post increase
console.log("Pre Increament of a is:",++a);//a=a+1 at same line
console.log("Post Decreament  of b is:",b--);
// now b=b-1 post decrease
console.log("Pre Decreament of b is:",--b);//b=b-1 at same line

/*Assignment operators*/

let p=5;
let q=6;

console.log("p+=q:",p+=q);
console.log("p-=q:",p-=q);
console.log("p*=q:",p*=q);
console.log("p/=q:",p/=q);
console.log("p%=q:",p%=q);
console.log("p**=q:",p**=q);//exponential
console.log("p=q:",p=q);

/*comparison operators*/

let m=5;
let n=5;

console.log("equal to:",m==n);//returns true
console.log("not equal to:",m!=n);//return false;

let r='5';//string
console.log("equal to and datatype:",m===r);//returns false;
console.log('not equal to and datatype:',m!==r);//returns true;

let x=6;
let y=8;

console.log("greater than:",x>y);
console.log("less than:",x<y);
console.log("greater than equal to:",x>=y);
console.log("less than and equal to:",x<=y);

/*Logical Operators*/

let cond1=x!=y;
let cond2=m==n;

//logical and
console.log("Cond1 && Cond2:",cond1 && cond2);

let cond3=m!=n;
//logical or 
console.log("Cond1 || Cond3 :",cond1||cond3);

//Logical not operator(invert)

console.log("!(cond1 && cond2):",!(cond1 && cond2));
//if true then made false or if false then made true


/*Conditional statements in JavaScript*/


//if condition--if true then executed or else nothing printed or executed
let age=25;
if(age>=18)
{
    console.log("Can Vote");
} 

if(age<18)
{
    console.log("You cannot vote");
}


let mode='dark';
let color;

if(mode==='dark')
{
    color='dark';
}

if(color==='white')
{
    color='white';
}


console.log(color);

//if-else statement(if our if condition gets satisfied then statement for if braces get executed or else the statement of else condition gets executed)

let value=9;

if(value%2==0)
{
    console.log("divisible by 2 and therefore even number");
}else{
    console.log("not divisible by 2 and therefore odd number");
}

//else-if statement(we use this to check if any of the conditions from set of multiple conditions gets satisfied or not,if yes then print or else our else condition at last gets printed)*/

let model='dark';
if(model=='dark')
{
    console.log(model);
}else if(model=='blue')
{
    color='pink';
}else{
    console.log('No satisfied');
}

/*Ternary operators  conditon?true output:false output*/

/* if condition gets satisfied then print our true output or else print our false output*/

let agem=25;
let result=agem>=18?"Adult":"Not Adult";//simpler or say compact if-else

/*stores "adult" string*/

/*switch statements used as if-else only ,we break into cases and it check all the conditions*/

const expr='Papayas';
switch(expr)
{
    case 'Oranges':
        console.log("Good");
        break;
    case 'Mango':
        console.log('Close');
        break;
    case 'Papayas':
        console.log('Perfect');
        break;
    default:
        console.log('Bad');
}


/*practice set -1*/

alert("hello");

//one time message pop up on our chrome browser

prompt("Hello");

//same feature as that of alert+we can input some kind of message on console and printed on webpage

let num=prompt("enter the value of number:");

if(num%5==0)
{
    console.log("Number is multiple of 5:",num);
}else{
    console.log("Number is not multiple of 3:",num);
}

/*practice set-2 grade score*/


let score=prompt("enter the score to check our grades:");

if(score>=90 && score<=100)
{
    console.log("Grade is A");
}else if(score>=70 && score<=89)
{
    console.log("Grade is B");
}
else if(score>=60 && score<=69)
{
    console.log("Grade is C");
}
else if(score>=50  && score<=59)
{
    console.log("Grade is D");
}
else if(score>=0 && score<=49)
{
    console.log("Grade is F");
}else{
    console.log("Failed")
}