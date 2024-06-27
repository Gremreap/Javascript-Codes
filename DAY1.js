console.log("welcome world"); 
console.log("My name is sam");
console.log("Learning Javascript");


/*variables in js*/

/*string datataype(we can also use ' '*/
fullname="gautam";
console.log(fullname);

/*int datatype*/

age=24;
console.log(age);


/*decimal datatype*/

price=99.99;
console.log(price);

/*to store special values(null,undefiend)*/

x=null;
console.log(x);
y=undefined;
console.log(y); 

/*to store boolean variable datatype*/

isthere=false;
console.log(isthere);
isnot=true;
console.log(isnot);


/*js is dynamically typed language (so if a variable storing bychance a string can also store integer value and we dont need to pre-requistely mention datatype for variable like we do in c++)*/

v="Hello";
console.log(v);
v=25;
console.log(v);

$71v="Hello";
console.log($71v); 

/*variables are generally assigned values using keywords*/

/*var can be updated or redeclared*/

var age=24;
var age=18;
age=19;
console.log(age);

/*let can be updated but not redeclared*/

let ch="hello";
ch=25;
console.log(ch);

/*const cannot be updated or redeclared*/

const u="love";
/*u =810 or const u=90 not allowed*/
console.log(u);

/*undefined condition for let keyword*/

 let p=15;
console.log(p)

/*to check the type of data we are storing*/
typeof p


/*datatypes of JS*/

/*primitive datatypes=number,string,boolean,undefined,NULL,BigInt,Symbol*/

/*non-primitive datatypes-objects with key -values pair*/

const object={
      name:'gautam',
      age:21,
      cgpa:8.2,
};

/*to access a particular value of a key or modify it*/

console.log(object.cgpa);
object['name']+=1;
console.log(object['name']);
console.log(object.name);

console.log(object);



/*practice set-1*/

const product={
    title:"Black pen",
    rating:4.5,
    offer:5,
    price:270,
};

console.log(product);
console.log(product['rating']);
product.rating+=1;
console.log(product.rating);
console.log(product['price']);
console.log(typeof product['title']);

/*practice set-2*/

const profile={
    username:'gautam_2202',
    followers:200,
    following:150,
    isfollow:true,
};


