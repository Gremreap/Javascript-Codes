//events in js referes to the change in state of an object 
// they are fired to notify code of interesting changes that may affect code execution 
//like mouse events,keyboard events,form events,print event

//event handeling in js

/*

node.event()=>{
    
    //handle event
    }


*/

let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a =25;
    a++;
    console.log(a);

};

let divide=document.querySelector("#division");
divide.onmouseover=()=>{
    alert('Hovering pur div');
    console.log('Hello world');
    //for hovering
}

//event object is a special object that has details about the event 

//all event handlers have the access to the event's obejct's properties and methods

/*

node.event(e)=>{
    //handle here
}

*/

btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

/*

event listners

node.addEventListner(event,callback);--->(function,handler)
*/

btn1.addEventListener("click",()=>
{
    console.log("button 1 was clicked");
    //same click multiple results we can get

    //alse valid for event objects
});

btn1.addEventListener("click",(evt) =>
{
    console.log(evt.target);
}
);

//to remove event listners

//node.removeEventListner(event,callback)--->(function,callback to remove)

//since they might occupy diffrent positions in our memory space so we would first store in a place then go

const handler3=()=>{
    console.log("button was clicked-handler3");
}
btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);


//handler 3 statemt in removed now

let mode=document.querySelector("#mode");
let currMode="light";
mode.addEventListener("click",()=>{
   if(currMode==="light")
    {
        currMode='dark';
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode='light';
        document.querySelector("body").style.backgroundColor="white";
        //we can also do with css files but learn them afterwords
    }


console.log(currMode);
}
);
