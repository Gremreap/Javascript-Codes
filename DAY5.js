//functions are the block of code used to perform some specific tasks can be invoked whenever needed

// function defination and function calling

/*
   function functionName(param1,param2)
   {
    //do some work,block of code
   }

   functionName();
   //function calling



*/

function hello(message,n,check)
{
    //parameters->input
    console.log(message);
    console.log("we are learning js");
    //string * number=not a number
    console.log(`The sum of 2 numbers is: ${message+check}`);
}

hello(1,"hello world",3);


//returning a value and sum
function sum(x,y)
{
    //x and y are acting as local variables within this function,after this they dont exist
    s=x+y;
    return s;
    //after return statement nothing is going to be printed after that
    console.log("after done");
}

let val=sum(3,4);
console.log(val);

// arrow functions are a compact way of writing funtions
//const functioname=(param1,param2)=>


    //{   do some work}


    const func=(a,b)=>
        {
            //const func value stored in it and when we calll func it will print rest code
            console.log("Hello World");
        }

const arrowmul=(a,b)=>
    {
        return a*b;
    };//storing function values for small code it is best

function fetch(stringp)
{
    length=stringp.length;
    let counter=0;
    for(var i=0;i<length;i++)
        {
            if(stringp[i]=='a'|| stringp[i]=='e'||stringp[i]=='i'||stringp[i]=='o'||stringp[i]=='u')
            {
                counter++;
            }
        }

    console.log(`The numbr of vowels in our string is:${counter}`);
}

const store=(str)=>
    {
      let count=0;
      for(const char of str)
        {
            if(char=='a' ||char=='e' ||char=='i'||char=='o'||char=='u')
                {
                    count++;
                }
        }

        return count;
    };

/*
 forEach loop in Arrays

 arr.forEach(callBackFunction)

 CallbackFunction ->a function to execute for each element in array

 a callback is a function passed as an argument to another function

 arr.forEach((val)=>{
    console.log(val)

    //it is a method
    just like toUpperCase for strings

 })
  we can print our values,indexes or arrays itself in arrays(only for arrays)

  these are higher order functions-->using other functions as a parameter or returning function itself
 */

 let arr=[1,2,3,4,5];
 arr.forEach((val,idx,arr)=>
    {console.log(val,idx,arr);
});
 
arr.forEach(function printval(val,index,arr)
{
    console.log(val,index,arr);
}
)


//square of each number
let story=[1,2,3,4,5,6];
story.forEach((val,index)=>
    {
        val*=val;
        console.log(val,index);
    });
//or we can use square func separately

let nums=[67,52,39];
let calcSquare=(num)=>
    {
        console.log(num*num);
    };

nums.forEach(calcSquare);



//some important methods in arrays

/*

map

creates a new array with the results of some operation ,the value its callback returns are used to form new array

arr.map(callbackFnx(value,index,array))//just similar to for each

*/

nums.map((val)=>
{
    console.log(val);
    //or return(val)
    //by map values we can also create arrays so slightly diffrent than our forEach method
}
);

let newarr=nums.map((val)=>
    {
return val;});

console.log(newarr);

//filter method
//creates a new array of elements that give true for a condition/filter ,eg:-all even elements

let check=arr.filter((val)=>{
    return val%2==0;
    //condition to return even values of our array
})

console.log(check);

//reduce method --->performs some operations and reduces the array to a single value,it returns that single value 

/*const array1=[1,2,3,4];
const initialValue=0;
const sumWithInitial=array1.reduce(
    (accumlator,currentValue)=>accumlator+currentValue,initialValue
);

console.log(sumWithInitial);
*/

const output=arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(output);


//to find out the largest element in our array

const validate=arr.reduce((prev,curr)=>{
    return prev>curr ? prev:curr;
});

console.log(validate);

//filtering out the values 

let marks=[97,65,44,35,96,12,89];
let toppers=marks.filter((val)=>{
    return val>90;
});

console.log(toppers);

let value=prompt("enter the number:");
let p=[];
for(let i=1;i<=n;i++)
    {
        p[i-1]=i; // 0-->1,1,-->2
    }

const res=p.filter((prev,curr)=>{
    return prev+curr;
});

console.log(res);

const mul=p.filter((prev,curr)=>{
    return prev*curr;
});

console.log(`factorial:${mul}`);
    
