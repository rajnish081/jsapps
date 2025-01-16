// let car="hindai";
// // let car;
// console.log(car);

// var cars='bmw';
// var cars;
// console.log(cars);


// let x=5+'3'+4;
// console.log(x);


// const person={name:'rajnish',age:23,mood:'angry'};
// person.age=21;
// console.log(person);
// objects are mutable



// const rectangle={
//     length:1,
//     breadth:4,
//     draw :function(){
//         console.log('drawing')

//     }

// }
// console.log(rectangle);
// rectangle.draw; 
// rectangle.draw(); 
// console.log(rectangle.length);

// const rectangle={
//     length:1,
//     breadth:4,
//     draw :function(){
//         console.log('drawing')
//     }
// }


// factory function
// function createRectangle(length,breadth) {
//     const rectangle={
//         length,
//         breadth,
//         draw:function(){
//             console.log('hello ji');
//         }
//     }
//     return rectangle;
// }

// let rectangle1=createRectangle(3,5);
// console.log(rectangle1);



// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// let a={value:12};
// let b=a;
// a.value++;
// console.log(a);
// console.log(b);


// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);



// let rectangle={len:2,breadth:34};
// // for in loop
// for (let key in rectangle){
//     console.log(rectangle[key]);
// }



// let sr ={a:10,b:20,c:40};

// iterative way
// let dest={};
// for (let key in sr){
//     dest[key]=sr[key];
// }
// console.log(dest);
// for (let key in dest){
//     console.log(key,dest[key]);
// }

// // assign way
// let dest=Object.assign({},sr);
// console.log(dest);

// spread way
// let dest={...sr};
// console.log(dest);


// primitive way of string
let lastName='   babbar';

// object
let firstName=new String('love');
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(lastName.startsWith('bab'));
console.log(firstName.length);

console.log(lastName.trim());