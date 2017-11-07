#!/usr/local/bin/node                                                                                                     

var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
console.log("Content-type: text/html; charset='utf-8'\n");

setTimeout(()=>{
  console.log("<h3>u guess " + param.guess + "</h3>");
          if(param.guess == ans){
              console.log("<h3>ans is " + ans + "</h3><br><h3>BINGO!!!!!!!!!!!!!!!!!!!!!</h3>")
                }
                  else{
                      console.log("<h3>ans is " + ans + "</h3><br><h3>WRONG!!!!!!!!!!!!!!!!!!!!!</h3>")
                        }
                        },0);
                        ~       

