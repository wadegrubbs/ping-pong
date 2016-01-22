describe ('pingPong', function () {

 it("is not valid numerical input", function () {
   expect(pingPong("words")).to.equal("true")
 });

 it("input is not divisible by 3 or 5", function () {
   expect(pingPong("2")).to.equal("number")
 });

 it("input is divisible by 3 and not 15", function () {
   expect(pingPong("9")).to.equal("ping")
 });

 it("input is divisible by 5 and not 15", function () {
   expect(pingPong("10")).to.equal("pong")
 });

 it("input is divisible by 15", function () {
   expect(pingPong("30")).to.equal("pingpong")
 });



 });
