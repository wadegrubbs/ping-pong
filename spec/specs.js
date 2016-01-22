describe ('pingPong', function () {

 it("is not valid numerical input", function () {
   expect(pingPong("words")).to.equal("false")
 });
 });
