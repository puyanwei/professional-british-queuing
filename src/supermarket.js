function Supermarket() {
  this.customerTimeArray;
  this.runningTime = 0;
  this.currentTillers = [];
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  this.currentTillers = this.customerTimeArray.splice(0, numberOfTills);
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

Supermarket.prototype.largestNumberInArray = function(array) {
  return Math.max.apply(null, array);
};

Supermarket.prototype.sumArray = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
