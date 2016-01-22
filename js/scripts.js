var pingPong = function ( number ) {

var number;
  // if (number.isNaN) {
  //   return "true";
  // }

  if ((number % 3 === 0) && (number % 15 !== 0)) {
    // console.log(pingPong(number))
    return "ping";
  }

  else if ((number % 5 === 0) && (number % 15 !== 0)) {
    return "pong";
  }

  else if (number % 15 === 0) {
    return "pingpong";
  }

  else {
    return number;
  }

}

var number = pingPong(number)
$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    var number = $("input#inputNumber").val();
    var result = pingPong(number);
    console.log(result);
    $(".output").text;

    console.log(number);
    console.log(result);

    $("#result").show().append("<p>This is " + result + "</p>");
    $("#result").show();
    event.preventDefault();
  })
})




// $(document).ready(function() {
// })
