function Supermarket() {
  this.customerTimeArray;
  this.currentTillers = [];
  this.runningTime = 0;
}

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  for (var i = 0; i < customerTimeArray.length + 4; numberOfTills++) {
    console.log(this.customerTimeArray.length < numberOfTills);
    if (this.customerTimeArray.length < numberOfTills) {
      this.runningTime += Math.max.apply(null, this.customerTimeArray);
      return this.runningTime;
    }
    this.currentTillers = this.customerTimeArray.splice(0, numberOfTills);
    console.log(this.currentTillers + " CT");
    this.deductLowestToAll(this.currentTillers);

    // console.log(this.customerTimeArray, this.currentTillers, this.runningTime);
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
};
