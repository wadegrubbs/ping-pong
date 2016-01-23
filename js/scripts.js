var pingPong = function ( number ) {
  // if (number.isNaN) {
  //   return "true";
  // }
  // var number;
  var array = [];
  var result;
    console.log(number);
  for(var i = 1; i <= number; i++) {

  if ((number % 3 === 0) && (number % 15 !== 0)) {
    // console.log(pingPong(number))

    array(i).push("ping");

  }

  else if ((number % 5 === 0) && (number % 15 !== 0)) {
    // return "pong";
        array.push("pong");
  }

  else if (number % 15 === 0) {
    // return "pingpong";
        array.push("pingpong");
  }

  else {
    // return number;
        array.push(i);
  }

var result = array.join();

console.log(result);
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

    $("#finalResult").show().append("<p>This is " + result + "</p>");
    // $("#result").show();
    event.preventDefault();
  })
})




// $(document).ready(function() {
// })
