describe("Supermarket", function() {
  beforeEach(function() {
    supermarket = new Supermarket();
  });

  describe("#queueTime", function() {
    it("returns a blank array if the array is zero", function() {
      expect(supermarket.queueTime([], 1)).toEqual(0);
    });
  });

  describe("#sumArray", function() {
    it("returns the sum of the array", function() {
      expect(supermarket.sumArray([1, 2, 3])).toEqual(6);
    });
  });
});

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.
