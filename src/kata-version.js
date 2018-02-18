function queueTime(customerTimeArray, numberOfTills) {
  this.customerTimeArray = customerTimeArray;
  this.currentTillers = [];
  this.runningTime = 0;

  if (customerTimeArray.length === 0) {
    return runningTime;
  }

  if (moreTillsThenCustomers(numberOfTills)) {
    return largestNumberInArray(customerTimeArray);
  }

  currentTillers = moveCustomersToTills(numberOfTills);
  deductLowestToAll(currentTillers);
  return queueTime(customerTimeArray, numberOfTills);
}

deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = lowestNumberInArray(array);
  runningTime += lowest;
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  currentTillers = newArray;
};

moveCustomersToTills = function(numberOfTills) {
  return customerTimeArray.splice(0, numberOfTills - currentTillers.length);
};

moreTillsThenCustomers = function(numberOfTills) {
  return numberOfTills > customerTimeArray.length;
};

largestNumberInArray = function(array) {
  return Math.max.apply(null, array);
};

lowestNumberInArray = function(array) {
  return Math.min.apply(null, array);
};
