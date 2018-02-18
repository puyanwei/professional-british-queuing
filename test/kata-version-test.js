describe("supermarket queue kata", function() {
  describe("#initialize", function() {
    it("runningTime variable starts at zero", function() {
      expect(runningTime).toEqual(0);
    });
    it("currentTillers variable starts as an empty array", function() {
      expect(currentTillers).toEqual([]);
    });
  });

  describe("#queueTime", function() {
    it("returns zero if the queueTime array length is zero", function() {
      var result = queueTime([], 1);
      expect(result).toEqual(0);
    });
    it("inputting [1], 2 should return 1", function() {
      var result = queueTime([1], 2);
      expect(result).toEqual(1);
    });
    it("returns the largest number in customerTimeArray if the number of tills is more then the number of customers", function() {
      var result = queueTime([1, 2, 3, 3, 2], 9);
      expect(result).toEqual(3);
    });

    it("inputting [1, 2, 3, 4], 1 should return 10", function() {
      var result = queueTime([1, 2, 3, 4], 1);
      expect(result).toEqual(10);
    });
    it("inputting [2, 2, 3, 3, 4, 4], 2 should return 9", function() {
      var result = queueTime([2, 2, 3, 3, 4, 4], 2);
      expect(result).toEqual(9);
    });
    it("inputting [1,2,3,4,5], 100 should return 5", function() {
      var result = queueTime([1, 2, 3, 4, 5], 100);
      expect(result).toEqual(5);
    });
  });

  describe("#deductLowestToAll", function() {
    it("deducts the lowest element of the array to all elements, and removes it", function() {
      deductLowestToAll([8, 5, 3, 9]);
      expect(currentTillers).toEqual([5, 2, 6]);
    });
    it("removed element added to runningTime variable", function() {
      runningTime = 0;
      deductLowestToAll([10, 5, 7, 2, 3]);
      expect(runningTime).toEqual(2);
    });
    it("adds array to currentTillers", function() {
      deductLowestToAll([3, 5, 2, 1, 3]);
      expect(currentTillers).toEqual([2, 4, 1, 2]);
    });
  });

  describe("#moveCustomersToTills", function() {
    it("moves the customers to the number of free tills. Expects to return [2, 4]", function() {
      currentTillers = [];
      var result = moveCustomersToTills([2, 4, 5, 3, 3], 2);
      expect(result).toEqual([2, 4]);
    });
    it("expects to return [9, 1, 2]", function() {
      currentTillers = [];
      var result = moveCustomersToTills([9, 1, 2, 6, 3], 3);
      expect(result).toEqual([9, 1, 2]);
    });
    it("expects to return [10, 11, 12, 16, 13]", function() {
      currentTillers = [];
      var result = moveCustomersToTills([10, 11, 12, 16, 13], 5);
      expect(result).toEqual([10, 11, 12, 16, 13]);
    });
  });

  describe("#moreTillsThenCustomers", function() {
    it("returns true if there are more tills then customers, and false if there are not", function() {
      expect(moreTillsThenCustomers([1, 2, 3], 5)).toBe(true);
      expect(moreTillsThenCustomers([1, 2, 3], 2)).toBe(false);
    });
  });

  describe("#largestNumberInArray", function() {
    it("returns the largest number in the array", function() {
      expect(largestNumberInArray([2, 6, 4])).toEqual(6);
    });
  });

  describe("#lowestNumberInArray", function() {
    it("returns the lowest number in the array", function() {
      expect(lowestNumberInArray([1, 6, 1, 4])).toEqual(1);
    });
  });

  describe("#ifEmptyArrayReturnAnswer", function() {
    it("returns the final runningTime of the queuing", function() {
      runningTime = 15;
      result = ifEmptyArrayReturnAnswer([]);
      expect(result).toEqual(15);
    });
  });
  //
  // describe("kata short random tests", function() {
  //   it("entering [38,15,11,22,17,5,35,26,47,3,2,17,40,9,21,35,38,41,43,6] with 5 tills should return 108", function() {
  //     //prettier-ignore
  //     result = queueTime([27, 4, 11, 6,5,35,26,47,3,2,17,40,9,21,35,38,41,43,6],5)
  //     expect(result).toEqual(108);
  //   });
  // });
});
