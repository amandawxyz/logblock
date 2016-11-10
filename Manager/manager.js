console.log("manager started");
$(document).ready( function () {
$('form').submit(function(event) {
        event.preventDefault();
        console.log("form submitted");
        console.log($("#newBlock input[name=name]").val());
    })
  })