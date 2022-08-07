// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var length = array.length;
// console.log(length);
// var intex=array[8];
// console.log(intex);

// var arr=[1,2,3,4,5,6]

// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }
// var arr=[1,2,3,1,2,42,1,39,3,24,2]
// var ss=arr.filter((data,id)=>{
//     return arr.indexOf(data)==id
// })
// console.log(ss);

// var arr=[1,2,1,2,2,1]
// var ss=arr.find(2)
// console.log(ss);


// for(let i of array){
//     console.log(i);
// }
// for(let i in array){
//     console.log(i);
// }

// var total=0;
// for(i=0;i<=length;i++){
//      total+= i;
//     console.log(total);
// }
// var avg=total/10;
// console.log(avg);

// var person={
//     name:'sudhakar',
//     fathersname:'sankar',
//     age:22,
//     members:{
//         brothers:2,
//         sisters:2,
//     }
// }
// console.log(person.members.brothers);

// var person55 =[
//     {name: 'sudhakar'},
//     {fathersname: 'sankar'},
//     {age: 22},
//     {brothers: 2},
//     {sisters: 2},

// ]
// var length=person.length;
// for(i=0;i<=length;i++){
//     console.log(person55[i].fathersname);
// }
// array.forEach((e,intex)=>{console.log(e,intex);})

// array.forEach(add);
// function add() {
//     for(i=0;i<length;i++){
//         console.log(array[i]);

//     }

// }


// var arr=['a','b','c','d','e','f','g','h'];
// var arr=[10,23,12,43,15,46,33];


// var arr1=['gnana','francis','arun','venkar','joseph','gnana']
// console.log(arr.copyWithin(1,4,5));
// console.log(arr.copyWithin(0,3));

// var ite=arr.entries();
// console.log(ite);
// console.log(ite.next().value);


// console.log(arr.every(add));
// function add(a) {
//     var total=a<=46;
//     return total;

// }
// add(arr)

// //fill
// console.log(arr.fill(2,0,5));

// //fillter
// console.log(arr1.filter(fi));
// function fi(a) {
//    var total=a.length<6;
//    return total;


// }
// fi(arr1)

// //find first ulla value return
// console.log(arr.find(search));

// function search(a) {
//     var total=a>10;
//     return total;

// }
// search(arr);

// //find intex
// console.log(arr.findIndex(int));
// function int(a) {
//     var total=a>25;
//     return total;

// }
// int(arr)

// //foreach
// console.log(arr.forEach(each));
// function each(a) {
//     var total=a;
//     return total;

// }
// each(arr);

// //from
// console.log(Array.from('sudhakars'));

// //includes
// console.log(arr.includes(34));
// console.log(arr.includes(33));

// //indexof
// console.log(arr1.indexOf('francis'));
// console.log(arr1.indexOf('sathish'));

// //isarray
// console.log(Array.isArray([1,2,3])); 

// //join
// console.log(arr1.join('-'));
// console.log(arr.join('+'));

// //keys
// console.log(arr.keys(arr));
// for(let i in arr){
//     console.log(i);
// }

// //last index
// console.log(arr1.lastIndexOf('gnana'));

// //map
// console.log(arr.map(mp));
// console.log(arr);
// function mp(a) {
//     var total = a*2;
//     return total

// }

// //array of
// console.log(Array.of(10));

// //reduce
// console.log(arr.reduce(function plus(a,b) {
//     var plus= a+b;
//     return plus;

// }
// ));
// console.log(arr.reduceRight(function plus(a,b) {
//     var plus= a+b;
//     return plus;

// }
// ));

// //reverse
// console.log(arr.reverse());

// //slice
// var arr2=['gnana','francis','arun','venkar','joseph','gnana','fais']
// console.log(arr2.slice(2,4));
// console.log(arr2);

// //splice
// console.log(arr2.splice(2,4,'sudha'));
// console.log(arr2);

// //some
// console.log(arr.some(mul));
// function mul(a) {
//     var total=a%3==0;
//     return total;


// }

// //sort
//  var arr3=[10,20,1001,01,1010,10000];
// console.log(arr3.sort());
// console.log(arr3);

// //value
// console.log(arr3.values());
// for(let i of arr3){
//     console.log(i);
// }

//rough work
//js basic 
//variables
//Data types
// var a = 12;
// var b = 'sudhakar';
// var c = true;
// var d
// var e = 39.55;
// var f = function add() {

// }
// var g = [];
// var h = {}
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);

//operators
// let x = '9';
// let y = 4;
// let z = x - y;
// console.log(z);
// console.log(typeof z);

// //assing operators
// let x1 = 9;
// let y1 = 4;
// x1 += y1;
// console.log(x1);
// console.log(typeof x1);

// //comparition operators
// let x2 = 9;
// let y2 = 9;
// let z2 = x2 == y2
// console.log(z2);
// console.log(typeof z2);

// //===
// let x3 = "9";
// let y3 = 9;
// let z3 = x3 === y3
// console.log(z3);
// console.log(typeof z3);

// //!=
// let x4 = 9;
// let y4 = 9;
// let z4 = x4 != y4;
// console.log(z4);
// console.log(typeof z4);

// //!==
// let x5 = "9";
// let y5 = 9;
// let z5 = x5 !== y5;
// console.log(z5);
// console.log(typeof z5);

// // >
// let x6 = 9;
// let y6 = 4;
// let z6 = x6 > y6;
// console.log(z6);
// console.log(typeof z6);

// // <
// let x7 = 9;
// let y7 = 4;
// let z7 = x7 < y7;
// console.log(z7);
// console.log(typeof z7);

// // ?
// let type = age = 19 > 18 ? "adult" : "child"
// console.log(type);
// console.log(typeof type);

// // logical operators
// // && , || , !
// let x8 = 9;
// let y8 = 9;
// if (x8 > 10 && y8 > 8) {
//     console.log('equal');

// }
// else {
//     console.log('not equal');
// }

// //  ||
// let x9 = 9;
// let y9 = 9;
// if (x9 > 10 || y9 > 8) {
//     console.log('equal');

// }
// else {
//     console.log('not equal');
// }

// // !
// let x10 = 9;
// let y10 = 9;
// if (!(x10 > 10 && y10 > 8)) {
//     console.log('equal');

// }
// else {
//     console.log('not equal');
// }

// //string concat
// let x11 = 'sudha';
// let y11 = 'kar';
// let z11 = x11 + y11;
// console.log(z11);
// console.log(typeof z11);

// // functions
// // no argument no return value
// function add() {
//     var x = 10;
//     var y = 20;
//     var total = x + y;
//     console.log(total);
// }
// add();

// //no argument with retun value
// function add1() {
//     var x1 = 10;
//     var y1 = 20;
//     total1 = x1 + y1;
//     return total1;
// }
// var tt = add1();
// console.log(tt);

// //with arguments no return
// function add2(a, b) {
//     total2 = a + b;
//     console.log(total2);
// }
// add2(10, 20);

//with argument with return value
// function add3(a, b) {
//     total3 = a + b;
//     return total3
// }
// var tot=add3(10, 20);
// console.log(tot);

// var players=[
//     {
//         "rank": 1,
//         "team": "india",
//         "name": "dohoni",
//         "runrating": 892,
//         "most of fiftys": 38,
//         "most of hundred": 4,
//         "best score": 98,
//         "age": 45
//     },
//     {
//         "rank": 2,
//         "team": "india",
//         "name": "rohit",
//         "runrating": 800,
//         "most of fiftys": 30,
//         "most of hundred": 4,
//         "best score": 90,
//         "age": 40
//     },
//     {
//         "rank": 3,
//         "team": "south africa",
//         "name": "AB Deviliers",
//         "runrating": 790,
//         "most of fiftys": 25,
//         "most of hundred": 3,
//         "best score": 98,
//         "age": 43
//     }
// ];
// var length=players.length
// console.log(length);
// // for(i=0;i<length;i++){
// //     console.log(players[i]["best score"],players[i].age,players[i].team);

// // }
// for(let i in players){
// console.log("name"+"-"+players[i].name+"-"+"best score"+players[i]["best score"]+"-"+"age"+players[i].age+"-"+"team"+"-"+players[i].team);
// }
// var ss=players[0];
// console.log(ss);
// var ss1=document.getElementById('para')
// ss1.innerText=ss;

// // arrow function
// var calculat=(val,s)=>val*s*5;
// console.log(calculat(5,2));

// //annanumous functions
// var adding=function () {
//     var u=20;
//     var u1=34;
//     v=u+u1;
//     console.log(v);
// }
// adding();

// //calback functions
// function main(x,o) {
//     console.log("main function");
//     console.log(x());
//     console.log(o());
// }
// main(call,asdf)

// function call() {
//     console.log('call back functions');
// }
// function asdf() {
//     console.log("sss");

// }

//

//conditional statement
// if(true) - else(false) - else if (2nd condition check)
// var b1=38;
// var c1=28;
// if(b1>c1){
// console.log('cl is talletst');
// }
// else if(b1===c1){
// console.log('two value is same');
// }
// else{
// console.log('b1 is tallest');
// }

// looping 
// for - while - do while
// for(i=0;i<=20;i++){

//     if(i%2==1){
//         console.log(i);
//     }
// }

//while loop
// var i=0;
// while (i<=20) {

//     if(i%2!=0){
//         console.log(i);
//     }
//     i++
// }

// do while
// var i=0;
// do {
//     console.log(i);

//     i++
// } while (i<=20);

//Array
//single variables with multible data(or) same type of data with "n" number of data
// var array=[];
// console.log(array);
// console.log(typeof array);
// //new arry 
// var newarr=new Array(5);
// console.log(newarr);
// //arr value add
// var array1=[10,20,30,40,50,60];
// //one value refer
// console.log(array1[0]);
// //length show
// var length=array1.length
// console.log(length);
//array total value refer
//methods = for - for in - for of- foreach
// for(i=0;i<length;i++){
//     console.log('index',i);
//     console.log("array value=",array1[i]);

// }
// //array value some 
// var temp=0;
// for(i=0;i<length;i++){
//   var temp=temp+array1[i];
//   console.log(temp);

// }
// var avg=temp/length;
// console.log(avg);

//for in = index value
// for(let i in array1){
//     console.log(i);
// }

// //for of
// var tt=0;
// for(let i of array1){
//     console.log(i);
//     var tt=tt+i;
//     console.log(tt);
// }

//foreach
// array1.forEach((a)=>console.log(a));

// objects 
// single variable with multible data types (or) different type of data  single variables
// var person1={
//     name:'sudhakar',
//     age:22,
//     launguage:'tamil',
//     degree:'M.Sc',
//     percentage:85,
//     college:'jamal mohamed college',
//     district:'trichy',
//     address:'v.poosaripatty'
// }
// var lenth=Object.keys(person1).length
// console.log(lenth);
// console.log(typeof keys);

//one value show
// console.log(person1.degree);
// //all value show
// for(let i in person1){
//     console.log(i+':'+person1[i]);

// }
// var person2={
//     name:'gnanasekar',
//     age:23,
//     launguage:'tamil',
//     degree:'M.Sc',
//     percentage:88,
//     college:'jamal mohamed college',
//     district:'trichy',
//     address:'viralimalai'
// }
// var person3={
//     name:'francis',
//     age:24,
//     launguage:'tamil',
//     degree:'B.Sc',
//     percentage:80,
//     college:'national college',
//     district:'thenkasi',
//     address:'pavoorchatram'
// }

// //one value show
// console.log(person2.address);
// person2.address='rajakiri';
// //all value show
// for(let m in person2){
//     console.log(m+':'+person2[m]);
// }

//dom : document object model


// var button = document.getElementById('btn');
// button.addEventListener('click', add)
// //how to create in element
// function add() {

//     var div = document.createElement('div')
//     console.log(div);
//     console.log(typeof div);
//     var para = document.createElement('p')
//     console.log(para);
//     console.log(typeof para);

//     //create text
//     var text = document.createTextNode("my name is sudhakar");
//     para.appendChild(text);
//     console.log(text);
//     console.log(typeof text);
//     para.setAttribute('style','color:orange; font-size:50px;')

//     //create anchor tag
//     var anchor = document.createElement('a')
//     console.log(anchor);
//     console.log(typeof anchor);

//     //text
//     var text1 = document.createTextNode("go to google");
//     anchor.appendChild(text1);

//     //link
//     anchor.setAttribute('href', 'https://www.google.com');
//     anchor.setAttribute('style', 'color:gold; background-color:black; border-radius:30%; padding: 0 1% 1% 1%;');

//     //append
//     div.appendChild(anchor)


//     //one elemnt inside add other element
//     div.appendChild(para);
//     console.log(div);
//     console.log(typeof div);

//     var get = document.getElementById('para1');
//     get.appendChild(div);

//     //style
//     get.style.border = 'solid green 5px', get.style.textAlign = 'center', get.style.fontSize = '30px';
//     console.log(document);

//     //one click in button disabled
//     button.setAttribute('disabled','disabled')

// }

// // create elememt
// var div = document.createElement('div')
// console.log(div);
// console.log(typeof div);

// // creat para element
// var para = document.createElement('p')
// console.log(para);
// console.log(typeof para);

// // one element inside add in other element
// div.appendChild(para);

// //create text
// var text = document.createTextNode("my name is sudhakar");
// para.appendChild(text);

// //outer html
// var x = div.outerHTML;
// console.log(x);
// console.log(typeof x);

// // other type of add in html page in appendchild
// var p = document.getElementById('para1');
// p.appendChild(div);
// console.log(typeof appendChild);

// // inner html
// var p1 = document.getElementById('para2');
// p1.innerHTML = x;
// console.log(typeof p1);


//  images
// var button=document.getElementById('btn');
// button.addEventListener('click',addimages);

// function addimages() {
//     var images =document.createElement('img');
//     images.setAttribute('src','book-g83f4821e7_1920.jpg');
//     var plus=document.getElementById('para1');
//     plus.innerHTML=images.outerHTML;

// }


// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length+1)
// body.style.backgroundColor = colors[colorIndex]
// }



// var colors = ['red', 'green', 'blue', 'orange', 'yellow'];

// document.body.style.backgroundColor = colors[1];


// call back functions

// function adding(second) {
//     let x = 10;
//     let y = 5;
//     let z = x + y;
//     console.log(z);
//     second();
// }
// adding(callback);

// function callback() {
//     let x1 = 10;
//     let y1 = 5;
//     let z1 = x1 - y1;
//     console.log(z1);

// }

// call back hell

// function a() {
//     console.log("hi");
//      function b() {
//         console.log("hello");
//          function c() {
//             console.log("good morning");
//               function d() {
//                 console.log("how are you");
                
//             }
//             d();
            
//         }
//         c();
        
//     }
//  \   b();
// }
// a();


// // promise

var age=()=>{
    let age=22;
    return new Promise((resolve,reject)=>{
        if(age==22){
            resolve("sudhakar");
        }
        else{
            reject();
        }
    })
}

var names=(ss)=>{
    console.log('name',ss);
    let marks=90;
    return new Promise((resolve,reject)=>{
        if(marks==90){
            resolve({name:ss,ages:22});
        }
        else{
            reject();
        }
    })
}

age()
.then((ss)=>names(ss))
.then((ss1)=>{
    console.log(ss1);
})
.catch(()=>{
    console.log('error');
})


// var firstName=new Promise((resolve,reject)=>{
//     let o=10;
//     if(o==10){
//         resolve("success")

//     }
//     else{
//         reject("error")
//     }
// })
// firstName.then(()=>{
//     console.log("success");
// })
// .catch(()=>{
//     console.log("error");
// })


// var array =[
//     {id:1,name:"sudhakar1",age:22},
//     {id:2,name:"sudhakar2",age:23},
//     {id:3,name:"sudhakar3",age:24},
//     {id:4,name:"sudhakar4",age:25},
//     {id:5,name:"sudhakar5",age:26}
// ]
// var length=array.length;

// for(var i in array){
//     console.log(array[i]); 
// }

//  array.forEach((a)=>console.log(a.id));

// for(i=0;i<length;i++){
//     console.log(array[i].name);
// }

// var ar=[1,2,3,1,2,3,4,5,4,5,6,6,6,6,6,6,6,6,6,6,6];
// console.log([...new Set(ar)]);

// console.log([...new Set(ar)]);

// for(i=0;i<ar.length;i++){
//     console.log(ar[i]);
    
// }







// function changes() {
// function shuffle(array) {
// let shuffledArray = [];
// let usedIndexes = [];
// let i = 0;
// while (i < array.length) {
// let randomNumber = Math.floor(Math.random() * array.length);
// console.log(randomNumber);
// if (!usedIndexes.includes(randomNumber)) {
// shuffledArray.push(array[randomNumber]);
// usedIndexes.push(randomNumber);

// i++;
// }
// }
// return shuffledArray;
// }
// /* Usage */
// const myArray = ["A","B","C","D","E"];
// const myShuffledArray = shuffle(myArray);
// document.getElementById('output').innerHTML = myShuffledArray; // myArray shuffled
// ?

// function showResult() {
//     function suffle(array) {
//         console.log(array);
//         let sufflearray=[];
//         let usedIndexes=[];
//         let i=0;
//         while (i<array.length){
//             let randomNumber=Math.floor(Math.random())
//             console.log(randomNumber);

//         }
        
//     }

//     const myArray=["A","B","C","D","E"];
//     const mysufflearray=suffle(myArray);     
// }

