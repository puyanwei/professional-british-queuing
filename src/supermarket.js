function Supermarket() {}

Supermarket.prototype.sumArray = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

Supermarket.prototype.queueTime = function(customerTimeArray, numberOfTills) {
  if (customerTimeArray.length === 0) {
    return 0;
  }
  if (numberOfTills === 1) {
    return this.sumArray(customerTimeArray);
  }
  if (numberOfTills > customerTimeArray.length) {
    return Math.max.apply(null, customerTimeArray);
  }
};
