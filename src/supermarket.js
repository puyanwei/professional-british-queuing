function Supermarket() {}

Supermarket.prototype.sumArray = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
