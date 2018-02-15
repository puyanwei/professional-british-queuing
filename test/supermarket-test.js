describe("Supermarket", function() {
  beforeEach(function() {
    supermarket = new Supermarket();
  });

  describe("#queueTime", function() {
    it("returns zero if the customerTimeArray is empty", function() {
      var result = supermarket.queueTime([], 1);
      expect(result).toEqual(0);
    });
    it("returns the sum of customerTimeArray if there is only one till", function() {
      var result = supermarket.queueTime([1, 2, 3, 4], 1);
      expect(result).toEqual(10);
    });
  });

  describe("#largestNumberInArray", function() {
    it("returns the largest number customerTimeArray if the number of tills is more then the number of customers", function() {
      expect(supermarket.largestNumberInArray([1, 2, 6, 2, 2])).toEqual(6);
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
