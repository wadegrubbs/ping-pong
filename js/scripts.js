var pingPong = function ( number ) {

  // if (number = isNaN(number)) {
  //   return "true";
  // }
  if ((number % 3 === 0) && (number % 15 !== 0)) {
    return "ping";
  }
  else if ((number % 5 === 0) && (number % 15 !== 0)) {
    return "pong";
  }

  else if (number % 15 === 0) {
    return "pingpong";
  }




}





$(document).ready(function() {
})
