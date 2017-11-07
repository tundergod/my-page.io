#!/usr/local/bin/node

var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
console.log("Content-type: text/html; charset='utf-8'\n");

var rn = require('random-number');

var options = {
  min:0,
  max:10,
  integer: true
}

var ans = rn(options);

setTimeout(()=>{
  console.log("<h3>u guess " + param.guess + "</h3>");
  if(param.guess == ans){
    console.log("<h3>ans is " + ans + "</h3><br><h3>BINGO!!!!!!!!!!!!!!!!!!!!!</h3>")
  }
  else{
    console.log("<h3>ans is " + ans + "</h3><br><h3>WRONG!!!!!!!!!!!!!!!!!!!!!</h3>")
  }
},0);
