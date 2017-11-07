#!/usr/local/bin/node

var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
console.log("Content-type: text/html; charset='utf-8'\n")

setTimeout(()=>{
  console.log("<br><h2>hello " + param.input + " welcome to my website!</h2>");
},1000)
