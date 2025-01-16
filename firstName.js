// console.log("hello world");
// let a=5;
// a='raj';
// console.log(a);
// let person={
//     firstName: 'rajnish' ,
//     age :2
// }
// console.log(person.age);
// console.log(person['firstName']);
// console.log(2*3); 
// post increment
// let number=6;
// console.log(number++);
// console.log(number);
// console.log(5>=3);
// console.log(6===6);
// console.log(4!==3);
// strict equality(it compares the value as well as type)
// console.log(1==='1');
// tis is looose equality so it only compares the value
// console.log(1=='1');
// conditional statement
// let age=33;
// let status=(age>=18)?'i can vote':'i cannot vote';
// console.log(status);
// switch case
// let num=9;
// switch(num){
//     case 1:console.log('a');
//     break;
//     case 2:console.log('c');
//     break;
//     default: console.log('t');
// }
// for (let i=0;i<5;i++){
//     console.log("rajnish"+i);
// }
// let say=0;
// while (say<4){
//     console.log("raj"+say);
//     say++;
// }
// do while loop(kam se kam ek bar loop run karega hi karega)
// let say=0;
// do{
//     console.log(say);
//     say++;
// }
// while (say<10);
// const rectangle={ 
//     length:30,
//     breath:30,
//     draw: function()  {
//         console.log('drawing rectangle');
//     }
// }
// console.log(rectangle);
// rectangle.draw();
// console.log(rectangle.length);
// factory function :-method to create object
// function createrectangle(len,bre){
//     const rectangle={ 
//         length:len,
//         breath:bre,
//         draw: function()  {
//             console.log('drawing rectangle');
//         }
//     }
//     return rectangle;
// }
// let a=createrectangle(4,7);
// console.log(a.length);
// console.log(a.draw());
// constructor function-->> pascal notation-->>firstletter of every word is capital
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log("drawing");
//     }
// }
// // object creation using constructor
// let rectangleObject=new Rectangle();
// console.log(rectangleObject);
// // dynamic nature of object
// rectangleObject.color="yellow";
// console.log(rectangleObject);
// // deleting the properties of object
// delete rectangleObject.color;
// console.log(rectangleObject);
// // constructor property
// console.log(rectangleObject.constructor);
// console.log(Rectangle.constructor);
// // this is object and refrence type me same address ko point karte hai
// let a={value:10};    
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b);
// // primitives types me copy banta hai
// let numb=10;
// function inc(numb){
//     numb++;
// }
// inc(numb);
// // console.log(inc(numb));
// console.log(numb);   
// let baby={value:12};
// function add(baby){
//     baby.value++;
// }
// add(baby);
// console.log(baby.value);
// iterating through objects
// for -in
// let rectangle={
//     length:2,
//     breadth:3
// };
// for (let key in rectangle ){
//     console.log(key,rectangle[key]); 
// }
// for-of
// for (let key of object.entries(rectangle)){
//     console.log(key);
// }
// let rectangle={
//     len:23,
//     bre:12
// };
// ('bre' in rectangle) ? console.log('present') : console.log('absent');
// if ('color' in rectangle){
//     console.log('present');
// }
// else {
//     console.log('absent');
// }
// object cloning
// method 1 to clone object: iteration
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for (let key in src){
//     dest[key]=src[key];
// } 
// console.log(dest);
// method 2 to clone object:assign
// let src={
//     a:10,
//     b:20
// };
// let dest=Object.assign({},src);
// console.log(dest);
// method 3 to clone object: spread
// let dest={...src};
// console.log(dest);
let firstName = 'rajnish';
