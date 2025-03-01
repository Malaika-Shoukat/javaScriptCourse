// console.log("Welcome to the JavaScript class")
// // Variables
// // //Numbers , String ,Booolean , Symbols ,Null ,BigInt ,undefined, not defined
// let a=15;
//  console.log(a);
//  console.log(Number.MAX_SAFE_INTEGER);
//  // Number.MAX_SAFE_INTEGER=====>9007199254740991
 
// //  "" '' (26 letter ,set of char)
//  let Name ="Malaika";
//  console.log(Name);
//  console.log(typeof Name);

//  let marks =true;
//  console.log(typeof marks);
   
//  let sym =Symbol("info");
//  console.log(sym);
//  console.log(typeof sym);

//  let t= null;
//  console.log(typeof t);

// //  MAX_SAFE_INTEGER<num -----BigInt represent=n
// let largeNum= 678n;
// console.log(typeof largeNum);

// let m;
// console.log(typeof m);
// // console.log(v);
// // ___________________________
// // string indexing
//  let fName ="sonia"
//  console.log(fName);
//  console.log(fName.length);
//  console.log(fName[2]);
// // ___________________________
// //  conversion 
// // number to string string(), num1+''
// let num1= 397;
// let newNum= String(num1)
// console.log(typeof newNum);

// // string to numbers number(), parseInt(), + price
// let price =("30000");
// let newPrice=Number(price)
// console.log(typeof newPrice);
//  let city = "gilgit";
//  console.log(typeof city);
//  let strCity = parseInt(city);
//  console.log(typeof strCity);
// //  ___________________________
// // Arthematic operators and expressions
// // -, + ,/ ,% ,*
// let x= 3;
// let y= 8;
// x+=5;
// x-=10;
// console.log(x);
// y*=x;
// console.log(y);
// console.log(x*x);
// console.log(x/x);
// // ________________________
// // comparision operator
// // <=, >=, !=,==,
// let comp1='23';
// let comp2=23;
// console.log(comp1<=comp2);
// console.log(comp1!=comp2);
// console.log(comp1===comp2);
// //  logical operators   AND &&, OR ||, NOT !
// let num3=6;
// let num4=4;
// console.log(num3>num4 && num3==num3);
// console.log(num4==num3 || num3<num4);
// console.log(num4!=num3);
// // _______________________
// // conditional statement
// // if,  if....else,   if...else statement
// let Marks =60;
// if(Marks<=100 && Marks>=90){
//     console.log("A+")
// }else if(Marks<=90 && Marks>=80){
//     console.log("A")
// }else if(Marks<=80 && Marks>=70){
//     console,log("B")
// }else if(Marks<=70 && Marks>=60){
//     console.log("C")
// }else{
//     console.log("Fail")
// };
// // ________________________
// //  let student =prompt("Welcome to peace coder academy  .Enter your name");
// // if(student="urooj"){
// //     alert("Thank you for entering your name urooj")
// // }else{
// //   alter("You are not")
// // }
// // confirm("Your Name is addad");
// // _________________________
// // switch case statement
// let days =3;
// switch (days){
//     case 0:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
// break;
//     case 5:
//         console.log("Friday");
// break;
//     case 6:
//         console.log("Saturday");
// break;     
//     default:
//         console.log("Invalid days")                        
// }
 // _________________________
 // ternary operator
// shortcut method if else statement
// let obtainMarks=10;
// let result =obtainMarks>60? "Passed":"fail"
// console.log(result);

// let Age=20;
// let person = Age>10? "teenage":"child"
// console.log(person);

// let score =15;
// let final =score>100? "win":"loss"
// console.log(final)
// // ___________________
// let b=10;
// let c=b;
// console.log(b,c);
// b=100;
// console.log(b,c);
// c=200;
// b=c
// console.log(b,c);

// let fName= "sonia"
// let lName= fName
// fName="Nadia"
// let pName=fName.toUpperCase()
// console.log(fName,lName);
// string Methods ---->functions / specific task  / build in (js)
//  toUpperCase, tolowerCase, Slice, replace,trim, concat,index[0]
// var sentence =" The quick brown fox jumps over a lazy dog."
// console.log(sentence);
// console.log("length="+sentence.length);
// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());
// console.log(sentence.slice(4,20));
// console.log(sentence.replace("quick","clever"));
// console.log(sentence.trim().length);
// console.log(sentence.concat("Keep this sentence in your mind!"));
// console.log(sentence[3]);
// _________________________
// string concatination
// combination of strings
// var str1 = "urooj";
// var str2 = "shoukat";
// method 1
// var userName =str1 + "  "+ str2 +" from pakistan";
// method 2
// var userName =str1.concat("from pakistan")
// var userName = str1.concat( " ",str2, " from pakistan")
// method 3
// template literal
// var userName =`${str1} ${str2} ${str1.length} from pakistan`
// console.log(userName);
// var timestramp = "moring"
// var loginUser= "ali"
// if (timestramp==="night"){
//     console.log(`GOOD ${timestramp} ${loginUser}`)
// }else if(timestramp==="Moring"){
//     console.log(`GOOD ${timestramp}${loginUser}`)
// }
// ____________________________
//  Nested if else statement
// if condition true hua to block mai sy code ko  print hoga wrna us ko ignore kr k else k block of code of ko print hoga
// let age =30;
// if (age>50){
//     console.log("age is greater than 50")
//     if (age>30){ console.log("age is greater than 30")}else{ console.log("age is less than 30")}
// }else{
//     console.log("age is less than 50") 
//     if(age<0){console.log("invalid age")}
// }
 
// grading system
// function getGrade(score){
//     if(score>=90 && score<=100){
//         console.log("A");
//     }else if(score>=80 ){
//         console.log("B");
//     }else if(score>=70 ){
//         console.log("C");
//     }else if(score=>60 ){
//         console.log("D")
//     }else{
//         console.log("f")
//     }
// }
// let grade= getGrade(99);
// console.log(grade);
// _____________________
// string indexing
// each char has a specific address    indexing starts ->0 
// var country= "pakistan"
// console.log(country[0]);
// // ___________________
// // loops
// // for, while, do while loop
// // DRY :DONOT REPEAT YOURSELF
// let username="sara"
// console.log(username[0]);
// console.log(username[1]);
// console.log(username[2]);
// console.log(username[3]);
// console.log(username[4]);

// // variable; condition ; increment/decrement
// for(i=0; i<username.length; i++){
//     console.log(username[i]);
// }
 
// while(i<username){
//     console.log(username[i])
//     i++;
// }

// do{
//     console.log(username[i])
//     i++;
// }while(i<username.length);
// ______________
// reference datatype/ non primitive data type 
// objects  sets
// arrays: all primitive datatypes means ["hello",21,true, 12n, undefined, null,symbol(21),[1,2,3]]
// indexing and length 
// let arr1=["hello",23,null,true,undefined,Symbol(21),90n,[2,5,7,8]];
// console.log(arr1);
// console.log(arr1.length);
// arr2=arr1;
// console.log(arr1,arr2);

// arr1[0]=90;
// arr1[1]="100";
// arr1[3]="pakistan";
// arr1[4]=15;
// console.log(arr1,arr2);
// console.log(typeof arr1, typeof arr2);
// console.log(arr1[5]);
// var innerArray=arr1[8];
// arr1.push("false");
// arr1.pop();
// arr1.shift();
// arr1.unshift("javascript");
// console.log(arr1,arr2);
 
// let marks=[5,8,6,3,9,2];
// console.log(marks);
// console.log ( marks.length);
// console.log(typeof marks);

// let numArr=[8,9,0,3,4];
// console.log(numArr[3]+7);
// console.log(numArr[4] == 4);
// console.log("2 x 5" + numArr[2]*5 );
// let newNum = numArr[0] !=8;
// console.log(newNum);
 
// let books=["math","computer","urdu"];
// let book= Array.isArray(books);
// console.log(book);
// console.log(books[0].toLocaleUpperCase());

// let country="pakistan";
// let result = Array.isArray(country);
// console.log(result);
// if(country="pakistan"){
//     console.log("country is string here")
// }else{
//     console.log("country is not string")
// }
//  let num="pakistan";
// let result=Array.isArray(num);
// if(result===true){
//     console.log("num is array")
// }else{
//     console.log("num is not array");
// }
// _____________________
// string iteration
// let userName="sara";
// for(i=0; i<userName.length; i++){
//     console.log(userName[i].toLocaleUpperCase())
// }
// __________________
// iteration in Array
// let marks=[40,50,98,54];
// for(j=0; j<marks.length;j++){
//     console.log(marks[j]);
// }
//  while loop
// let fruits=["apple","banana","orange",["mango","grapes"]]
// let k=0
// while(k<fruits.length){
//     console.log(fruits[k]);
//     k++;
// }
// console.log("length of fruits "+ fruits.length);
// console.log(fruits[3][0].toLocaleLowerCase());
 
// do while loop
// const numbers=[1,4,6,7,9];
// let sum = 0;
// let n=0;

// do {
//     sum +=numbers[n];
//     n++;
// }while(n<numbers.length);
// console.log(sum);

// program 
// when we enter any num ,print table of num 

// let table=7;

// for(i=0; i<=10; i++){
//     // console.log(`${table} x ${i}= ${table*i} `)    7x1=7
// console.log(`${table} x ${i} = ${table*i}`)
// }

// program 
// [] numbers 
//even numbers 

// let numbers = [1,3,5,4,6,7,8,90,76,77,55,45,44,23];

// for (let i = 0 ; i< numbers.length ; i++){
//     if(numbers[i] % 2 === 0){
//         console.log("even nnumber" +  numbers[i])
//     }else if(numbers[i] % 2 !== 0){
//         console.log("odd number" + numbers[i])
//     }
// }

//task 
// 4 program
//  find the largest num
//  let nums =[12,45,7,89,23];
// let max =nums[0];

// for(let i=1; i<nums.length; i++){
//     if(nums[i]>max){
//         max=nums[i];
//     }
// }
// console.log("latgest number:",max);

//  sum of all nums in array 
// let numbers =[2,4,5,6];
// let sum =0;
// for (let i=0; i<numbers.length; i++){
//     sum+= numbers;
// }
// console.log(`sum= ${sum}`);

// check even or odd 
// for(let i=1; i<=10; i++){
//     // i/2=0 even 
// if(i%2===0){
//     console.log(`${i} is even number`);
// }else{
//     console.log(`${i} is odd number`);
// }
// }

// check if an array contains a specific value 
//  let products =["bags","watches","shirts","shoes"];
//  let searchProducts ="watches";
//  if(products.includes(searchProducts)){
//     console.log(searchProducts +"  is in the array");
//  }else{
//     console.log(searchProducts +"  is not in the array")
//  }

// cloning /copy 
// method1:declara 2 variables and asign the same values
// arr1---- heap--->address>>0101010
// var arr1= [1,2,3,4];
// arr2----heap----->adress>>0111010
// var arr2= [1,2,3,4];
// both arrays have differ addresses
// arr1.push(80);
// console.log(arr1,arr2);

// ____________________
// method 2:concatination  concat<method>       var arr1=[2,5,4] ,  var arr2=arr2.concat(arr1)   
// let arr3=[3,4,6,7];
// let arr4=[];
// arr4=arr4.concat(arr3,"apple","banana");
// console.log(arr4 ,arr3);

// ____________________
// method 3:  es6  spread operator (...) cloning 
// var product1= "laptop";
// var result=[...product1];
// console.log(result);

// let courseBooks=["english","urdu","maths"];
// let novels=[ "Alice in wonderful land","the kite runner","thoundand spliended sun"];
// let books=[...courseBooks,...novels,"science"];
// console.log(books);
// ____________________
// advance topic 
// array destructuring
// array mai sy hr item ko new variable mai store krna 
// var fruits =["apple","banana","orange"];
// var f1= fruits[0];
// var f2= fruits[1];
// var f3= fruits[2];
// console.log(f1,f2,f3);

// var userId=[56780,97696,36578,9553,];
// var ali= userId[0];
// var khan= userId[1];
// var sara= userId[2];
// var saliha= userId[3];
// console.log(ali,khan,sara,saliha);

// var student=["Ali",5890,"software engineering",4500,"computer science"];
// var studentName= student[0];
 
// method 2 for distructuring of array 
// let list =[5,8,9,10];
// var a=list[0];
// var b=list[1];
// var c=list[2];
// var d=list[3];
// let [a,b, , ]=list
// console.log(a,b);

// let menu=["home","contacts","services","about"];
// let [First,second,third,forth] = menu;
// console.log(First,second,forth);

// let countries =["pakistan","india","iran","china"];
// let [c1,c2,c3,c4 ]=countries;
// console.log(c1,c2,c3,c4);

// let scores=[56,89,45,43,75];
// let [anila,komal,taifa,marzia,seerat]= scores;
// console.log(anila,komal,taifa,marzia,seerat);
// _______________________
// array iteration 
// var toys= ["a1","a2","a3","a4"];
// for(i=0; i<toys.length; i++){
//     console.log(toys[i]);
// }
//  let 
// var j = 0;
// while(j<toys.length){
//     console.log(toys[j]);
//     j++;
// }
// _____________________
// for of (index with items)  for in  loop(items with numbers)
// let numbers=[1,2,3,4,5,6];
// for(let index in numbers){
//     console.log(numbers[index], "index",index);
// }

// for(let number of numbers){
//     console.log(number,"number",number);
// }
// ___________________________
// push, pop, shift, unshift, concat,...operator ,ArrayisArray, indexing
//  let  items= ["pencil,book"];
// let res=items.unshift("pen");
// console.log(res);
// console.log(items.isArray);

// let fruits=["apple","banana","mango","grapes"];
// console.log(fruits.includes("apple"));
// var man=fruits.includes("mango");
// console.log(man);
// ___________________
// splice, slice, sort, map, filter, reduce, find, foreach, some,every
//  console.log(fruits[0]);
//  for(let index in fruits){
//     console.log(fruits[index],index);
//  }
//  for(let item of fruits){
//     console.log(item);
//  }
//  slice(startingindex, endingindex <ending index not include>)
// let sliceFruits=fruits.slice(0,2);
// console.log("fruits array", fruits);
// console.log("slice of fruits", sliceFruits);
// ____________________
// nonprimitives, reference 
// arrays
// objects key----valuepair
// keys are alway strings 
// objects have no index 
// values may be primitive or no primitive datatype like(Number,String.array,Object....)
// const user=["alice","canada",65];
// console.log(user);
// let users= {
//     fname:"urooj",
//     lname:"shoukat",
//     age:14,
//     pincode:3087,
//     country:"china",
//     is18:true,
//     favBook:["math","chemistry","physics"],
//     adress:{
//     street:"243 main street",
//     city:"karachi",
//     country:"pakistan"
//     }
// }
// console.log(users);
//to print any key from an object we use dot notion or bracket notation
// let userName= users.fname;
// console.log(userName.toUpperCase());
// console.log(users.favBook);
// const userFavbook=users.favBook;
// for(let favBook of userFavbook){
//     console.log(favBook.toUpperCase()[0]);
// }
// ______________________
// method chaining
// console.log(users.adress.country.toUpperCase());
// console.log(users.adress.street.toLowerCase().concat("House No.20"));
// // bracket notation 
// console.log(users.fname);
// console.log(users["age"]);
// console.log(users["adress"]);

// objects methods 
// Object.keys(object ka naam) ------> returns array of keys 
//  console.log(Object.keys(users));
// const userobjKeys= Object.keys(users);
// console.log(userobjKeys); 
// let userName= userobjKeys[0];
// console.log(userName);
// let lastName= userobjKeys[1];
// console.log(lastName);
// for(let prop of userobjKeys){
//     console.log(prop);
// }
//  Object.values(object name) ------>returns array of values of object
// console.log(Object.values(users));
// const userObjvalues= Object.values(users);
// console.log(userObjvalues);


// const userProfile={
//     userName: 'pokkee',
//     email:'pokkee58@gmail.com',
//     firstName:'sara',
//     lastName:'latif',
//     age:20,
//     bio:'web developer with a passion for creating userfriendly and functional applications',
//     profilePic:'https://media.istockphoto.com',
//     preferences:{
//         theme:'dark',
//         language:'english',
//         notification:true
//     },
//     friends:[
//         {friend1:'alido56', status:'online'},
//         {friend2:'khanbina', status:'offline'}
//     ],
//     createdAt:'2025-02-6'
// }
// console.log(userProfile);
// console.log(userProfile.bio);
// console.log(userProfile["bio"]);

// const userProfileObjectkeys= Object.keys(userProfile);
//  console.log(userProfileObjectkeys);
//  for(let userProfileKeys of userProfileObjectkeys){
//      console.log(userProfileKeys[0].toUpperCase());
//      console.log(userProfileKeys.toLowerCase());
//      console.log("This is the user profile details");
//     }
//  let userEmail= userProfileObjectkeys[1];
//  console.log(userEmail);
  
//  const userProfileObjectValues= Object.values(userProfile);
//  console.log(userProfileObjectValues);
// ______________________
// COMPUTED PROPERTIES
// let personName= "userName";
// let profileCreatedDate="createdAt";
// let userAge="age"; 

// const personData= {
//     [personName]:"pokkee",
//     [profileCreatedDate]:'2025-02-6',
//     [userAge]:'14'
// }
// console.log(personData[personName]);
// console.log(personData[profileCreatedDate]);

// products
// const products=[{
//     productName:'bags',
//     productId:'1',
//     productPrice:1200,
//     quality:30
// },
// {
//     ProductName:'watch',
//     productId:'2',
//     productPrice:3000,
//     quality:20
// },
// {
//     productName:'mobile phone',
//     productId:'3',
//     productPrice:4000,
//     quality:40
// },
// {
//     productName:'charger',
//     productId:'4',
//     productPrice:1000,
//     quality:10
// }
// ]

// for(let product of products){
//     if(product>1500){
//         console.log(product);
//     }
// }
// console.log(products);

// const playerScores=[{
//     plyer1:'ahmed',
//     score:30
// },
// {
//     player2:'khan',
//     score:50
// },
// {
//     player:'saliha',
//     score:60
// }];

// for(let playerScore of playerScores)
// { if(playerScore>50){
//     console.log(playerScore,'Congrats! you won the game.');
// }else{
// console.log(playerScore,'sorry! you loss');
// }
// }
// ______________________
// FUNCTIONS----->block{} of that perform a specific task 
// declare/ define ----then call/invoke 
// DRY (Do NOT REPEAT YOURSELF)
// STEP1
// FUNCTION DEFINITION /FUNCTION DECLARATION 

// function function name(){
//     code
// }
// function greet(){
//     console.log("hello programmers")
// }
// greet();

// function loginLms(){
//     console.log("welcome to LMS")
// }

// registrationNO=4902;
// if(registrationNO===4902){
//     loginLms();
// }
// _______________________________
// function definition  
// function subNumbers(){
//     console.log(3-4)
// }
// envoke
// subNumbers();

// dynamicWebsits <changes> / staticWebsites <do not change>
    
    // inputbox <name enter your name > <email enter your email> <password enter your passwrord >
    // PARAMETERS ------>placeholder----> (Function parameters are the names listed in the function definition.)
    // ARGUMENTS (Function arguments are the real values passed to (and received by) the function)
    
//     function multipleNumbers(num1 , num2){
//     console.log(num1*num2);
//     }
//     multipleNumbers(9,89);

//     function addNum(a,b){
//         console.log(a+b)
//     }
//     addNum(789,45);

//     function sum(num1,num2,num3,num4){
//         console.log(num1+num2+num3+num4);
//     }
//     console.log("sum of numbers is")
//     sum(47,55,92,84);
// sum(20,0,7,5);

// greeting function 
// function greetingfun(userName){
//     console.log(`welcome ${userName}`)
// }
// greetingfun("Alex");
// greetingfun("Nadia");

// // array 
// function courses(enrollCourses){
//     console.log(enrollCourses)
// }
// console.log("Enroll courses are")
//   courses(["IT","SE","AI","GIS"]);  

//   function productList(sellproducts){
//     console.log(sellproducts)
//   }
//   productList(["shoes","dresses","bags"]);

// objects
// function userData(fName,lName,age,country){
//     console.log(fName,lName,age,country)
    // create an obj 
//     let firstName= "fName" ;
//     let lastName="tin";
//     let Age="age";
//     let country= "country";

//     const newUser = {
//        [firstName]:"Alex",
//     [lastName]:"tin",
//     [age]:"20",
//     [country]:"pakistan"
//     }
// }


// console.log("wecome to our website" + newUser.firstName);
    
//    userData("Alex","tin","20","pakistan");
// userData("Anila","khan","23","pakistan");
// userData("komal","Amjad","24","india");
 
// _______________



// function sumNumbers(c,d){
//     if(typeof c!="number" || typeof d!="number"){
//         console.log("please Enter a number")
// }else{
//     console.log(c+d)
// }
// }

// sumNumbers(8,12);
// _________________
//   DEFAULT PARAMETERS-----> function parameters that have a predefined value.
// If the caller does not provide an argument for these parameters, the function uses the default value
// NaN (not a number)
// function totalNumber(a,b,c,d){
    // if(a===undefined){
    //     a=0
    // }
    // if(b===undefined){
    //     b=0
    // }
    // if(c===undefined){
    //     c=0
    // }
    // if(d==undefined){
    //     d=0
    // }
    // console.log(a+b+c+d);
// }
// totalNumber(20,30,40);
// _______________________
// Rest (...): Gathers values into an array (used in function parameters).
// Spread (...): Spreads values from an array into individual elements (used in array/object manipulation).

// REST PARAMETERS / rest operator----->
// allow a function to accept an indefinite number of arguments as an array. They are represented by three dots (...) before the parameter name. 
function marks(...b){
   let arrayMarks= console.log(b)
    return(arrayMarks);
}
marks(12,13,20,50,40,64);
function productotalPrice(a,b,c,d,e,f,...prices){
    let total=0;
    for(let price of prices){
        total= total+price
    }
    console.log(total);
    console.log(a,b,c,d,e,f);
}
productotalPrice("iphone","tv","watch","iron","laptop","mouse",18000,50000,4000,90000,1000);

function playerScores(player1,player2,player3,...scores){
    totalScores=0;
    for(let score of scores){
        totalScores= totalScores+score;
    }
    console.log("players:",player1,player2,player3);
    console.log("scores",scores);
    console.log("total score :",totalScores);

}
playerScores("Alex","Jone","Jaky",12,10,20);

// function
//function declaration
// parameters 
//argumants 
// default parameters 
//rest parameters 
//call/ invoke 
// create an object using function
//use loops inside functions
// return keyword
//keywords --->  speacial words that have specific meaning
// return statement is used to exit a function and send a value back to the caller. 

function userData(userName){
    console.log(userName);
    return "thanks"
}
userData("malaika");










    
    

    
   
   






 



 

















 





 






