describe("Queuing", function() {
  beforeEach(function() {
    queuing = new Queuing();
  });

  describe("#queueTime", function() {
    it("returns a blank array if the array is zero", function() {
      expect(queuing.queueTime([])).toEqual(0);
    });
  });

  describe("#sumArray", function() {
    it("returns the sum of the array", function() {
      expect(queuing.sumArray([1, 2, 3])).toEqual(6);
    });
  });
});

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.
