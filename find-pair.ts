var withoutPair = [1, 2, 3, 9];
var withPair = [1, 2, 4, 4];

var hasPair = (data, sum) => {
  var lo = 0;
  var hi = data.length - 1;

  while (lo !== hi) {
    var s = data[lo] + data[hi];

    if (s === sum) {
      return [data[lo], data[hi]];
    }

    if (s < sum) {
      lo++;
    }

    if (s > sum) {
      hi--;
    }
  }

  return null;
};

console.log(hasPair(withoutPair, 5));
console.log(hasPair(withPair, 5));
