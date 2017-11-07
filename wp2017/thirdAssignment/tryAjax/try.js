$("#ajax-form button[type=submit]").click((event) => {
  event.preventDefault()
  $.get("try.njs",{
    input:$("#ajax-form input[name=input]").val()
  },(data)=>{
    $("#output").html(data)
  })
})
