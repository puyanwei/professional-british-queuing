function Supermarket() {
  this.customerTimeArray;
  this.runningTime = 0;
  this.currentTillers = [];
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  for (var i = 0; i < customerTimeArray.length - numberOfTills; i++) {
    if (this.customerTimeArray.length === numberOfTills) {
      this.runningTime += Math.max.apply(null, this.customerTimeArray);
      return this.runningTime;
    }
    console.log(this.customerTimeArray, this.currentTillers, this.runningTime);
    this.currentTillers = this.customerTimeArray.splice(0, numberOfTills);
    this.deductLowestToAll(this.currentTillers);
  }
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
