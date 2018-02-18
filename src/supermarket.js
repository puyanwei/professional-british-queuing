function Supermarket() {
  this.currentTillers = [];
  this.runningTime = 0;
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  if (customerTimeArray.length === 0) {
    return this.runningTime;
  }
  if (this.moreTillsThenCustomers(customerTimeArray, numberOfTills)) {
    return this.largestNumberInArray(customerTimeArray);
  }
  this.currentTillers = this.moveCustomersToTills(
    customerTimeArray,
    numberOfTills
  );
  this.deductLowestToAll(this.currentTillers);
  return this.queueTime(customerTimeArray, numberOfTills);
};

Supermarket.prototype.deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = this.lowestNumberInArray(array);
  this.runningTime += lowest;
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  this.currentTillers = newArray;
};

Supermarket.prototype.moveCustomersToTills = function(array, numberOfTills) {
  return array.splice(0, numberOfTills - this.currentTillers.length);
};

Supermarket.prototype.moreTillsThenCustomers = function(array, numberOfTills) {
  return numberOfTills > array.length;
};

Supermarket.prototype.largestNumberInArray = function(array) {
  return Math.max.apply(null, array);
};

Supermarket.prototype.lowestNumberInArray = function(array) {
  return Math.min.apply(null, array);
};
