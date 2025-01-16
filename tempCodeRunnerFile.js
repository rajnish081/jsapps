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