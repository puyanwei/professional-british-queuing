function Supermarket() {
  this.customerTimeArray;
  this.currentTillers = [];
  this.runningTime = 0;
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  if (customerTimeArray.length === 0) {
    return this.runningTime;
  }
  if (numberOfTills > customerTimeArray.length) {
    return Math.max.apply(null, customerTimeArray);
  }
  this.currentTillers = this.customerTimeArray.splice(
    0,
    numberOfTills - this.currentTillers.length
  );

  this.deductLowestToAll(this.currentTillers);
  return this.queueTime(this.customerTimeArray, numberOfTills);
};

Supermarket.prototype.deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = Math.min.apply(null, array);
  this.runningTime += lowest;
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  this.currentTillers = newArray;
};
