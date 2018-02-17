describe("Supermarket", function() {
  beforeEach(function() {
    supermarket = new Supermarket();
  });

  describe("#initialize", function() {
    it("customerTimeArray variable starts undefined", function() {
      expect(supermarket.customerTimeArray).toBe(undefined);
    });
    it("runningTime variable starts at zero", function() {
      expect(supermarket.runningTime).toEqual(0);
    });
    it("currentTillers variable starts as an empty array", function() {
      expect(supermarket.currentTillers).toEqual([]);
    });
  });

  describe("#queueTime", function() {
    it("adds the customerTimeArray array passed in to the customerTimeArray variable", function() {
      supermarket.queueTime([1, 2, 3, 4], 1);
      expect(supermarket.customerTimeArray).toEqual([1, 2, 3, 4]);
    });
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
    it("removed element added to runningTime variable", function() {
      supermarket.deductLowestToAll([10, 5, 7, 2, 3]);
      expect(supermarket.runningTime).toEqual(2);
      supermarket.deductLowestToAll([7, 6, 7, 4, 3]);
      expect(supermarket.runningTime).toEqual(5);
    });
    it("adds array to currentTillers", function() {
      supermarket.deductLowestToAll([3, 5, 2, 1, 3]);
      expect(supermarket.currentTillers).toEqual([2, 4, 1, 2]);
    });
  });

  describe("#sliceArray", function() {
    it("slices the current array by the number and returns the new array of elements sliced", function() {
      var result = supermarket.sliceArray([1, 2, 3, 4, 5], 3);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe("#addNextElement", function() {
    it("moves in the next element to currentTillers from customerTimeArray", function() {
      supermarket.currentTillers = [1, 2, 3];
      supermarket.customerTimeArray = [4, 5];
      supermarket.addNextElement();
      expect(supermarket.currentTillers).toEqual([1, 2, 3, 4]);
      expect(supermarket.customerTimeArray).toEqual([5]);
    });
  });
});

//PLAN
//queue array, number of tills
//get sum of array first
//have to work out when a till is free, the time of one till may finish when another one is not.

//all numbers gets deducted by the lowest, lowest is removed and next number in array is added. That number removed should be added to array, and then summed to get the total time.
