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
    it("returns zero if the queueTime array length is zero", function() {
      var result = supermarket.queueTime([], 1);
      expect(result).toEqual(0);
    });
    it("inputting [1], 2 should return 1", function() {
      var result = supermarket.queueTime([1], 2);
      expect(result).toEqual(1);
    });
    it("returns the largest number in customerTimeArray if the number of tills is more then the number of customers", function() {
      var result = supermarket.queueTime([1, 2, 3, 3, 2], 9);
      expect(result).toEqual(3);
    });

    it("inputting [1, 2, 3, 4], 1 should return 10", function() {
      var result = supermarket.queueTime([1, 2, 3, 4], 1);
      expect(result).toEqual(10);
    });
    it("inputting [2, 2, 3, 3, 4, 4], 2 should return 9", function() {
      var result = supermarket.queueTime([2, 2, 3, 3, 4, 4], 2);
      expect(result).toEqual(9);
    });
    it("inputting [1,2,3,4,5], 100 should return 5", function() {
      var result = supermarket.queueTime([1, 2, 3, 4, 5], 100);
      expect(result).toEqual(5);
    });
  });

  describe("#deductLowestToAll", function() {
    it("deducts the lowest element of the array to all elements, and removes it", function() {
      supermarket.deductLowestToAll([8, 5, 3, 9]);
      expect(supermarket.currentTillers).toEqual([5, 2, 6]);
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

  describe("#moveCustomersToTills", function() {
    it("moves the customers to the number of free tills", function() {
      var result = supermarket.moveCustomersToTills([2, 4, 5, 3, 3], 2);
      expect(result).toEqual([2, 4]);
    });
  });

  describe("#moreTillsThenCustomers", function() {
    it("returns true if there are more tills then customers, and false if there are not", function() {
      expect(supermarket.moreTillsThenCustomers([1, 2, 3], 5)).toBe(true);
      expect(supermarket.moreTillsThenCustomers([1, 2, 3], 2)).toBe(false);
    });
  });

  describe("#largestNumberInArray", function() {
    it("returns the largest number in the array", function() {
      expect(supermarket.largestNumberInArray([2, 6, 4])).toEqual(6);
    });
  });

  describe("#lowestNumberInArray", function() {
    it("returns the lowest number in the array", function() {
      expect(supermarket.lowestNumberInArray([1, 6, 1, 4])).toEqual(1);
    });
  });
});
