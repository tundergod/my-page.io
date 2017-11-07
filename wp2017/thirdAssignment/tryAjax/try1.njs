#!/usr/local/bin/node

var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
var data = {
}
console.log("Content-type: text/html; charset='utf-8'\n");
if(param.hi == "1"){
  setTimeout(()=>{
    data.try1 = param.fname.toUpperCase();
    data.try2 = param.lname.toUpperCase();
    data = JSON.stringify(data);
    console.log(data);
   // console.log("<br><h2>hello " + param.fname +  " " + param.lname + " welcome to my website!</h2>");
   // console.log("<h3>u guess " + param.guess + "</h3>");
  },0);
}
else{
  console.log("<h1>lalala wwww</h1>")
}


