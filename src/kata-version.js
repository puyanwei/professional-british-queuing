var currentTillers = [];
var runningTime = 0;
var iterations = 0;

var queueTime = function(customerTimeArray, numberOfTills) {
  var currentTillers = [];
  iterations++;
  ifEmptyArrayReturnAnswer(customerTimeArray);
  currentTillers = moveCustomersToTills(customerTimeArray, numberOfTills);
  if (customerTimeArray.length <= numberOfTills) {
    return largestNumberInArray(currentTillers) + runningTime;
  }
  currentTillers = deductLowestToAll(currentTillers);
  customerTimeArray = currentTillers.concat(customerTimeArray);
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
  currentTillers = newArray;
  return currentTillers;
  console.log(currentTillers, lowest, runningTime);
};

var ifEmptyArrayReturnAnswer = function(array) {
  if (array.length === 0) {
    var finalTime = runningTime;
    runningTime = 0;
    return finalTime;
  }
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
