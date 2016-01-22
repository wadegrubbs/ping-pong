describe ('pingPong', function () {

 it("is not valid numerical input", function () {
   expect(pingPong("words")).to.equal("true")
 });

 it("is divisible by 3 and not 15", function () {
   expect(pingPong("9")).to.equal("ping")
 });

 it("is divisible by 5 and not 15", function () {
   expect(pingPong("10")).to.equal("pong")
 });

 it("is divisible by 15", function () {
   expect(pingPong("30")).to.equal("pingpong")
 });
 // it("is not valid numerical input", function () {
 //   expect(pingPong("words")).to.equal("true")
 // });

 });
