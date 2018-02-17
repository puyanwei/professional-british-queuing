describe("Supermarket", function() {
  beforeEach(function() {
    supermarket = new Supermarket();
  });

  describe("#initialize", function() {
    it("runningTime starts at zero", function() {
      expect(supermarket.runningTime).toEqual(0);
    });
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

  describe("#deductLowestToAll", function() {
    it("deducts the lowest element of the array to all elements, and removes it", function() {
      var result = supermarket.deductLowestToAll([8, 5, 3, 9]);
      expect(result).toEqual([5, 2, 6]);
    });
  });
});

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.

//all numbers gets deducted by the lowest, lowest is removed and next number in array is added. That number removed should be added to array, and then summed to get the total time.
