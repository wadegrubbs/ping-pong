describe ('pingPong', function () {

 it("is not valid numerical input", function () {
   expect(pingPong("words")).to.equal("true")
 });

 it("is divisible by 3 and not 15", function () {
   expect(pingPong("3")).to.equal("true")
 });

 // it("is not valid numerical input", function () {
 //   expect(pingPong("words")).to.equal("true")
 // });
 //
 // it("is not valid numerical input", function () {
 //   expect(pingPong("words")).to.equal("true")
 // });

 });
