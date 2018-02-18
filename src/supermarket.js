function Supermarket() {
  this.customerTimeArray;
  this.currentTillers = [];
  this.runningTime = 0;
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  console.log(this.runningTime);
  if (customerTimeArray.length === 0) {
    return this.runningTime;
  }
  this.currentTillers = this.customerTimeArray.splice(0, numberOfTills);
  this.deductLowestToAll(this.currentTillers);
  return this.queueTime(this.customerTimeArray, numberOfTills);
};

Supermarket.prototype.deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = Math.min.apply(null, array);
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      this.runningTime += lowest;
      newArray.pop(element);
    }
  });
  this.currentTillers = newArray;
};

supermarket = new Supermarket();
supermarket.queueTime([1, 2, 3, 4], 1);
