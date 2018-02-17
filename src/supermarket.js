function Supermarket() {
  this.customerTimeArray;
  this.runningTime = 0;
  this.currentTillers = [];
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  // if (customerTimeArray.length === 0) {
  //   return 0;
  // }
  // if (numberOfTills === 1) {
  //   return this.sumArray(customerTimeArray);
  // }
  // if (numberOfTills > customerTimeArray.length) {
  //   return this.largestNumberInArray(customerTimeArray);
  // }
  this.currentTillers = this.sliceArray(this.customerTimeArray, numberOfTills);
};

Supermarket.prototype.deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = Math.min.apply(null, array);
  array.forEach(function(element) {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  this.runningTime += lowest;
  this.currentTillers = newArray;
  return newArray;
};

Supermarket.prototype.addNextElement = function() {
  this.currentTillers.push(this.customerTimeArray[0]);
  this.customerTimeArray.shift(1);
};

Supermarket.prototype.sliceArray = function(array, sliceNumber) {
  return array.slice(0, sliceNumber);
};

Supermarket.prototype.largestNumberInArray = function(array) {
  return Math.max.apply(null, array);
};

Supermarket.prototype.sumArray = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
