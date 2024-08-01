//fetch api is used as an interface for fectching the data(sending/recieving) resources
//request and response objects from various other websites

//fetch()--->used to fetch a resource --->application programming interface

//eg-->let promise =fetch(url,[options]) 

const url="https://cat-facts.herokuapp.com/facts";

const fact=document.querySelector("#fact");

const btn=document.querySelector("#btn");


//async await for api functioning

const getFacts=async()=>{
    console.log("getting data...");
let response=await fetch(URL);
console.log(response);//JSON FORMAT
///response is an object
let data=await response.json();
console.log(data);//usable data
//to convert to readable format 
factPara.innertext=data[0].text; 
};

function getFacts()
{

    //promise chaining
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        fact.innertext=data[2].text;
    })
}

btn.addEventListener("click",getFacts);