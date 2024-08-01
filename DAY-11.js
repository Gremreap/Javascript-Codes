// async await >>promise chains>> callback hell
//in terms of better 

//Sync is Js

/*


Synchronous-code runs in a particular sequence of instructions given in the
program each instruction waits for its previous instruction to complete its execution

*/

console.log("one");
console.log("two");
console.log("three");

/*
 due to synchronous programming,sometimes imp instructions get blocked due to 
 some previous instructions -->causing delay in the UI

 -->this asynchronous code execution allows to execute next instructions immediately
 and doesnt block the flow

*/

function hello(){
    console.log("Hello");
}

setTimeout(hello,2000)//timeout 1 sec=1000 msec after that time our codeis been executed;

//or 

setTimeout(()=>{

    console.log("Hello")

},4000);


//if after this settimeout we had written any statement,it will not wait for 4 seconds 
//but will get executes instantly and after 4 seconds hello gets printed

//asynchrnous programming

//callbacks are a function passed as an argument to another function

function sum(a,b)
{
    console.log(a+b);
}

function calculator(a,b,sumCallback)
{
    //callback function
    sumCallback(a,b);
}

//function as an argument
calculator(a,b,sum);

//or 

calculator(a,b,(a,b)=>
{console.log(a+b);
}
)

const hello=()=>
{
    console.log("Hello");
}

//callbacks in timeouts
setTimeout(hello,3000);
//hello printed after 3 sec



//callback hell-->nested callbacks stacked below one another forming a pyramid structure

//it becomes difficult to manage and understand


//nseting loops or iteration

let age=19;
if(age>=18)
{
    if(age>=60)
    {
        console.log("senior");
    }else{
        console.log("middle");
 }}
    else{
        console.log("Child")
    }

    //for loop

for(let i=0;i<5;i++)
{
    let str="";
    for(let j=0;j<5;j++)
    {
        str=str+j;
    }
console.log(i,str);
}

//a database for callback hell

function getData(dataId)
{
    setTimeout(()=>{
        console.log("data",dataId);
     },4000);
}

//but while accessing we might face the case where there is no delay in outputs generated


//even if we want some kind of delay in our programme


function getData(dataId,getNextData)
{
    setTimeout(()=>{
        console.log("data",dataId);
        //if we found out data
        if(getNextData)
        {
            //to check if data is actually there or not
            getNextData();
        }
    },2000);
}


//after every 2 seconds individual data gets printed,but not good practice

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});

//to deal callback hell we use promises

//promise is for eventual completion of task --->an object in js

//it is a solution to callback hell

let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve(120);
    reject("some error occured");
});  

//promises hava 3 states-->pending,fulfiled(resolved) and rejected states


//either our request is resolved or rejected

//resolve and reject are callbacks provided in js --->handlers


//now we are using getapi to resolve our promise by taking input and
//after fixed time it gets printed

function getData(dataId,getNextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            //after promise gets printed our value given as input
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    })
}

/*

A javascript promise object can be:
Pending-result is undefined
resolved --result is a value(fulifiled)--->resolve(result)
rejected:result is an error object -->reject(error)

*/


/* how promises are resolved without manul interruption

.then() and .catch()

promise.then((res)=>{})
promise.catch((err)=>{})
*/


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        //resove("success")-->goes to then block
        reject("network error");
    });
};


let promises=getPromise();
promises.then((res)=>{
  console.log("promise fulfiled",res);
});

//if error occurs

promises.catch((err)=>{
   console.log("error occured",err);
   //catches the error part 
})

function asynFunc1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
           console.log("some data1");
           resolve("success");
        },4000);
    })
}

function asynFunc2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
           console.log("some data2");
           resolve("success");
        },4000);
    })
}

//calling and returning a promise

console.log("fectching data1");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
})


console.log("fectching data1");
let p2=asyncFunc2v();
p1.then((res)=>{
    console.log(res);
})

//or if priority of first function must be there then call accordingly

console.log("fetching data1.....");
let p5=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fecthing data2...");
        let p2=asyncFunc2();
        p2.then(()=>{
            console.log(res);
        }
        
    )
})

//async-await

/*

aysnc function -->to make asynchronous programming easy 

async Function myFunc(){...}

-->await pauses the execution of its surroundings async function until the promise is settled

*/


async function hello()
{
    console.log("hello");
}

function api()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
        });
}

async function getWeatherData()
{
    await api();
    await api();
}

function getData(getId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000)
    });
}

async function getAllData()
{
    console.log("getting our data's");
    await getData(1);
    await getData(2);
    await getData(3);
}