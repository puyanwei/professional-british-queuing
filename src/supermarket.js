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
  this.currentTillers = this.customerTimeArray.splice(
    0,
    numberOfTills - this.currentTillers.length
  );

  this.deductLowestToAll(this.currentTillers);
  console.log(this.customerTimeArray);
  return this.queueTime(this.customerTimeArray, numberOfTills);
};

Supermarket.prototype.deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = Math.min.apply(null, array);
  this.runningTime += lowest;
  console.log("runningTime " + this.runningTime);
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  this.currentTillers = newArray;
  console.log(this.currentTillers);
};
