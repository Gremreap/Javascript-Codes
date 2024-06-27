//window object-the window object represents an open window in a browser,it is a browser's obejct that is automaticaly created byt the browser

//it is a global object with lots of properties and methods

console.log(window);
window.console.log("hello");

//cosole.log,prompt or alert all are the part of window as an object

/*
  DOM(Document Object Model)
      when a web page is loaded,the browser creates a Document Object Model of the page

      for example when our html is loaded in js file,the codes present in html act as a object(known as document also)

       this document is avaliable on our window object
*/

console.dir(window.document.head);
console.log(document.body);
console.dir(document);

//DOM Manipulation by selecting to id to access the elements

//select with id
let check=document.getElementById("select");
console.log(check);
console.dir(check);
//# select would represent the id,if nothing is there it returns null

//select by class(to put multiple elements in same category ) returns HTML collections if empty then it returns empty HTML collections

let headings=document.getElementsByClassName("heading");
console.dir(headings);

//selecting with tag 

let store=document.getElementsByTagName("p");
console.dir(store)
//for the paragraphs



//DOM manipulation with the help of query selector


//query selector --->returns a nodelist 
let firstelem=document.querySelector("p");//1st element
console.dir(firstelem);  

let choose=document.querySelector(".heading");
console.log(choose);
let stack=document.querySelector("#select");
console.log(stack);

//returns the first elemet

let allelem=document.querySelectorAll("p");//all the elements
console.dir(allelem);

let allchose=document.querySelectorAll(".heading");
console.log(allchose);

let fullstack=document.querySelectorAll("select");
console.log(fullstack);

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"From Apna College Students";
//concatinate



//returns a nodelist


//DOM MANIPULATION PROPERTIES

//tagName used to return the name of our tag for element nodes

//let he=firstelem.tagName;
//console.log(he);

//innerText returns the text content of the element and all its children


//to get the attributes

//let div=document.querySelector("div");
console.log(div);

let id =div.getAttribute("id");
console.log(id);//to get the attribute value

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class","hello"));

let div=document.querySelector("div");
/*
div.style.properties----used to change our css style properties
div.style.backgroundColor="greeen"--->for eg
*/



let newBtn=document.createElement("button");
newBtn.innerText="Hi";
console.log(newBtn);

div.append(newBtn);//to add new button at the end of our node(inside)
div.prepend(newBtn)//adds at the start of the node(inside)
div.before(newBtn);//adds before the node
div.after(newBtn)//adds after the node
//for example

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,i am new</i>";

document.querySelector("body").prepend(newHeading);

//to delete the element(or remove the node)

Node.remove()//removes the node


let checker=document.createElement("button");
checker.innerText="click me!!";

checker.style.backgroundColor="white";
checker.style.color="black";


document.querySelector("body").prepend(checker);

let parat=document.queryQuery("p");

//to add 2 classes we would be using a classlist for the same


div.classList.add("newClass");//from the css element





