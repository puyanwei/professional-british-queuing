describe("Queuing", function() {
  beforeEach(function() {
    queueing = new Queuing();
  });

  describe("#sumArray", function() {
    it("returns the sum of the array", function() {
      expect(queuing.sum([1, 2, 3])).toEqual(6);
    });
  });
});

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.
