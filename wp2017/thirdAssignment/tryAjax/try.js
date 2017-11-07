$("#ajax-form button[type=submit]").click((event) => {
  event.preventDefault()
  $.get("try1.njs",{
    fname:$("#ajax-form input[name=fname]").val(),
    lname:$("#ajax-form input[name=lname]").val(),
    guess:$("#guess input[name=guess]").val(),
    hi:"1"
  },(data)=>{
    console.log(data)
    data = JSON.parse(data)
    $("#output-guess1").html("<h1>ans = " + data.try1 + "</h1>")
  })
})

$("#guess button[type=submit]").click((event) => {
  setTimeout(function(){
    console.log("loading...");
  })
  event.preventDefault()
  $.get("try2.njs",{
    guess:$("#guess input[name=guess]").val()
  },(data)=>{
    data = JSON.parse(data)
    $("#output-guess1").html("<h1>ans = " + data.try1 + "</h1>")
  })
})
