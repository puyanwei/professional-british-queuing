var currentTillers = [];
var runningTime = 0;
var iterations = 0;

var queueTime = function(customerTimeArray, numberOfTills) {
  var currentTillers = [];
  iterations++;
  if (customerTimeArray.length === 0) {
    return runningTime;
  }
  if (moreTillsThenCustomers(customerTimeArray, numberOfTills)) {
    return largestNumberInArray(customerTimeArray);
  }
  currentTillers = moveCustomersToTills(customerTimeArray, numberOfTills);
  console.log(currentTillers, customerTimeArray, runningTime);
  currentTillers = deductLowestToAll(currentTillers);
  console.log(currentTillers, customerTimeArray, runningTime);
  customerTimeArray = currentTillers.concat(customerTimeArray);
  console.log(currentTillers, customerTimeArray, runningTime);
  return queueTime(customerTimeArray, numberOfTills);
};

var deductLowestToAll = function(array) {
  var newArray = [];
  var lowest = lowestNumberInArray(array);

  runningTime += lowest;
  array.forEach(element => {
    newArray.push(element - lowest);
    if (element === lowest) {
      newArray.pop(element);
    }
  });
  return newArray;
};

var moveCustomersToTills = function(array, numberOfTills) {
  return array.splice(0, numberOfTills - currentTillers.length);
};

var moreTillsThenCustomers = function(array, numberOfTills) {
  return numberOfTills > array.length;
};

var largestNumberInArray = function(array) {
  return Math.max.apply(null, array);
};

var lowestNumberInArray = function(array) {
  return Math.min.apply(null, array);
};
