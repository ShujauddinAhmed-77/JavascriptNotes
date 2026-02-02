// // let a=20, b=10;
// // a=a-b;
// // console.log(a);
// // b=b-a; 
// // b=a+b;
// // console.log(b);
// // //digit sum calci
// // let num=prompt("Enter a number:",456);
// // d1=num/100; 
// // d2=num/10;
// // console.log(Math.floor(d1));
// // console.log(Math.floor(d2));
// // //notes day 2
// // //let x: Number = 5;
// // //console.log(x);
// // let userAge = 25;
// // userAge = "twenty-five";
// // userAge = null;
// // function calculateDiscount(age){
// //     return age*0.1;
// // }
// //string in js 
// //escape with backslash;
// let message= 'it\'s a beautiful day';
// console.log(message);
// //when template literals are used no backslash is needed
// let message1=`it's without backslash`;
// console.log(message1);
// //string properties and methods
// let nam="zubair", empty='';
// console.log(nam.length,empty.length);
// console.log(nam.toUpperCase(),nam.toLowerCase());
// console.log(nam.slice(0,5));
// console.log(nam.replace("zubair",'sohaib'));
// //escape sequence characters \n \t \\ \' \" \r
// let escape="first \tline\nSecond line";
// console.log(escape);
// //string indexing
// let str= "london";
// console.log(str[0],str[2]);
// console.log(str[str.length-1])//accessing last digit by strlength;
// //practical examples
// let email="abc@gmail.com";
// if(email[0]==='@'){
//     console.log("invalid email");
// }else{
//     console.log('valid email');
// }
// //getting initials
// let fn="mir", ln="zubair", initials=fn[0] + ln[0];
// console.log(initials);
// //character validation
// let pwd="pass123", firstChar=pwd[0], lastChar=pwd[pwd.length-1];
// if(firstChar>='0'&& lastChar<='9'){
//     console.log("password ends with  a number");
// }
// //string are immutable to change create a new string
// let str1='razi';
// let str2="mohd"+str1.slice(1);
// console.log(str2);
// //string concatenation "" + "" +""
// //numbers and strings number+ string=string
// let str3="asdf"+23;
// console.log(str3,typeof str3);
// //concatenaation used in 3 cases 
// // building messages,creating urls, building file names
// let user="zubair", points=150;
// let msg="welcome"+ user+ "!"; score="you got"+ points+"points"
// console.log(msg,score);
// //urls
// let domain="example.com", protocol="https://", page="/about";
// let fullUrl=protocol+domain+page;
// console.log(fullUrl);
// //file names
// let fileName="report", type=".pdf", year=2024;
// let fullfile=fileName+"_"+year+type;
// console.log(fullfile);
// // message = '"hello" message+=world output=hello world
// //string + number = always string 
// //template literal`name is $name `is better than + 
// //undefined use cases
// //1.variable not assigned a value
// //2.function with no return value
// //3.accessing a value not exist like 
// //let user2={name:alices};
// //console.log(user.age)//only user.name has value alice
// //4.array elements that does not exist 
// let a=["a",'b']
// console.log(a[2]);
// //5.function parameter not provided 
// //null use cases ..intentionally empty..manually updated
// let currentUser= null;//no user logged in
// let winner ="alice"; //dsplay this then 
// winner = null; //clear this
// //api response
// let userData={ name1:"bob",phone:null}//user has not provided any number
// //real world examples
// //1.user login state login function display name logout null  function ..it
// //2.optional form fields like middle name:null; nickname:undefined
// //3.databse record
// let products={ 
//     id:101,
//    // products2:laptop,
//     discount:null,//no discounts currently
//     ratings:undefined//no rating provided atall
// };
// //console methods
// console.warn("warning");
// console.error("error");
// console.info("information");
// console.clear();
// //template literals benifits
// //1.embedding variables between strings become easy
// //2.clearer syntax
// //3.easy multi line without backslash like pre 
// //4.practical examples
// //1.user greeting by taking $username
// //2.shopping cart receipt
// let item="apple",quantity=5, price=50;
// let receipt=`
// Items:${item}
// Quantity:${quantity}
// price:${price}
// `;
// //3.html generation 4. dynamic messages output player aice level is 15
// //highlevel usage of ${tempalate literals }
// //expression and function calls 
// //conditional logic
// //loose equality leads to bugs use === or!==
// let g=5, h="5";
// console.log(h==g);
// //real world examples
// // convert to to Number(user input)  if it  string
