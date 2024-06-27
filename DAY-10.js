//javascript ojbect --> it is an entity having some state and behaviour(properties and method)

//js objects have a special property named prototype
//setup of prototype===  _ _ proto _ _

const student={
    //properties
    fullName:"gautam srivastava",
    marks:98,
    //method in our object
    printMarks: function()
    {
        console.log("marks= ",this.marks);//student.marks
    },

    //object having some state and a behaviour

    //this keyword used in js to access the value of an object
};

//prototype is itself an obejct having some inbuilt functions
//object inside an object

let arr=["apple","mango","banana"];
//arr is itself an object having some prototype

arr.push("litchi");

//we can create our own prototype

const employee={
    calcTax(){
        console.log("Tax has increased  by 30 percent");
        //[prototype]:object also predefined created
    },

    //2nd way to write fxn

    calcTax2 :function()
    {
        console.log("Tax rate is same");
    },
};


//if we invoke same function of one object to another object,the invoked one is chosen

const karanArjun={

   salary:50000, 
   //object wins such cases
   calcTax()
   {
    console.log("Hello world");
   }
}

//to access elements of one object from another object we can write them as a prototype
//to set a prototype to use func of obj2 in obj1
karanArjun.__proto__ =employee;
//access func of employee object in karanArjun (reference to an object)
karanArjun.calcTax();
//now we can access fxn of obj2


//if object and prototype have same method,object's method will be used

//Classes is JS

//program code template for creation of obejcts

//those objects will have some state(variables) and some behaviour (functions) inside it

class MyClass{

    //blueprint for our object

    //constructor(){...}
    //myMethod(){...}

}

//let myObj=new MyClass();


class Car{
    start()
    {
        console.log("start");
    }

    end(){
      console.log("stop");
    }

    setBrand(brand)
        {
            this.brand=brand;
            //this represents the function for which the obejct is been called
            //this helps to distinguish between both the brands ,the brand as a function of class and the brand as a value of argument from an obejct
        }
}

//to create an object from class

let Fortuner=new Car();
//we can access class elements by object (all methods and values are stored in object)
Fortuner.start();

let lexus=new Car();
lexus.end();

Fortuner.setBrand("Fortuner");


//constructor is a special method in class ,reserved keyword

//even if we dont invoke any constructor by ourselves ,javascript will invoke constructor for us automatically

class studenty{
    constructor(brand,pos)
    {
        console.log("creating a new object");
        this.brand=brand;
        this.pos=pos;
    }
  //whenever a new object is created a construtor is automatically invoked
    start()
    {
        console.log("start studying");
    }

    stop()
    {
        console.log("stop studying");
    }

    setmarks(marks)
    {
        this.marks=marks;
    }
}


let value=new studenty("rabies",12);//constructor been invoked
console.log(value);
let yeoo=new studenty();
console.log(yeoo);

//sending multiple arguments in constructor at a time

//we can write yeoo.brand="pig" and print yeo to get the brand name on console

//even if we dont pass any argument in constructor it will remain undefined




///->>>> Inheritence in Js

//inheritence is passing down properties and methods from parent class to child class


/*

class Parent{




}

//child getting parent's properties inheriting

class Child extends Parent{


}



----->if child and parent have same method or functions,child's method will be used

  (method overriding) or function overriding

*/

class Parent{
    hello()
    {
        console.log("Hello");
    }
}

class Child extends Parent
{
    func()
    {
        console.log("pizza");
    }
}
    //child inherits parent's objects

    let obj=new Child();

class Person{
    constructor()
    {
        this.species="homo sapiens"; 
    }
    eat()
    {
        console.log("eat");
    }

    sleep()
    {
        console.log("sleep");
    }

    work()
    {
        console.log("do nothing")
    }
}

//inheritence child class is our derived class

class Engineer extends Person
{
    work()
    {
        console.log("solve problems");
    }
}

//obejct created
let me=new Engineer;

//super keyword in JS=used to call the constructor of its parent class to access parent's properties and methods present in our child class

class a1{
    constructor(name)
    {
        console.log("enter the parent constructor");
        this.name=name;
    }

    eat(){
        console.log("eat");
    }
}

class b1 extends a1{
    constructor(name)
    {
        console.log("enter the child constructor");
        super(name);//to invoke parent class constructor
        this.name=name;
        console.log("exit child constructor");
    }
    work()
    {
        super.eat();//to invoke any parent function inside child function
        console.log("learning web dev");
    }
}

let select=new b1("gautam");
 

//practice question


let values="scare me";
class User{
  constructor(name,email)
  {
    this.name=name;
    this.email=email;
  }

  viewdata()
  {
    console.log("data=",values);
  }
}

class Admin extends User{

    constructor(name,email)
    {
        super(name,email);

    }
   editData()
   {
    values="new values";
   }
}

let stud1=new User("gautam","12345");
let stud2=new User("manasvi","ilulu");

let admin=new Admin("admin","ok");



//Error handeling in JS
//in js if any line has error ,the rest of the lines coded would not be printed creating an error

//try catch code block

 let a=5;
 let b=10;
 console.log("a=",a);
 console.log("b=",b);
 console.log("a+b=",a+b);

 try{
    console.log("a+b =",a+c);

    //try if there is any errror in code or not
 }catch(err)
 {
    console.log(err);
    //prints the error in our code
 }

 console.log("a+b=",a+b);

 console.log("a+b=",a+b);
 console.log("a+b=",a+b);

 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);




 



