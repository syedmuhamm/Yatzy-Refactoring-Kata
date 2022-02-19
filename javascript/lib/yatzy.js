export var Yatzy = function (d1, d2, d3, d4, d5) {
  this.dice = [];
  this.dice[0] = d1;
  this.dice[1] = d2;
  this.dice[2] = d3;
  this.dice[3] = d4;
  this.dice[4] = d5;
};

// ones() sums up all the dices, with 1 as a top face.

Yatzy.ones = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 1 && (sum += 1));
  return sum;
};

// twos() sums up all the dices, with 2 as a top face.

Yatzy.twos = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 2 && (sum += 2));
  return sum;
};

// threes() sums up all the dices, with 3 as a top face.

Yatzy.threes = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 3 && (sum += 3));
  return sum;
};

// fours() sums up all the dices, with 4 as a top face.

Yatzy.fours = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 4 && (sum += 4));
  return sum;
};

// fives() sums up all the dices, with 5 as a top face.

Yatzy.fives = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 5 && (sum += 5));
  return sum;
};

// sixes() sums up all the dices, with 5 as a top face.

Yatzy.sixes = function (d1, d2, d3, d4, d5) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  values.forEach((val) => val === 6 && (sum += 6));
  return sum;
};

// score_pair() add up pair of highest value of top face die.
Yatzy.score_pair = function (d1, d2, d3, d4, d5) {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }
  for (var at = 0; at != 6; at++)
    if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
  return 0;
};

// two_pair() adds up, sum of two pairs of top face die.

Yatzy.two_pair = function (d1, d2, d3, d4, d5) {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }
  var n = 0;
  var score = 0;
  for (var i = 0; i < 6; i += 1)
    if (counts[6 - i - 1] >= 2) {
      n++;
      score += 6 - i;
    }
  if (n == 2) return score * 2;
  else return 0;
};

// three_of_a_kind() add up three die with same top face.

Yatzy.three_of_a_kind = function (d1, d2, d3, d4, d5) {
  var counts;
  counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }

  for (var i = 0; i < 6; i++) if (counts[i] >= 3) return (i + 1) * 3;
  return 0;
};

// four_of_a_kind() add up fours die with same top face.

Yatzy.four_of_a_kind = function (d1, d2, d3, d4, d5) {
  var counts;
  counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }

  for (var i = 0; i < 6; i++) if (counts[i] >= 4) return (i + 1) * 4;
  return 0;
};

// small_straight() adds up all the die, if they have one-five sequence.

Yatzy.small_straight = function (d1, d2, d3, d4, d5) {
  var counts;
  counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }

  if (
    counts[0] == 1 &&
    counts[1] == 1 &&
    counts[2] == 1 &&
    counts[3] == 1 &&
    counts[4] == 1
  )
    return 15;
  return 0;
};

// large_straight() adds up all the die, if they have two-six sequence.

Yatzy.large_straight = function (d1, d2, d3, d4, d5) {
  var counts;
  counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }

  if (
    counts[1] == 1 &&
    counts[2] == 1 &&
    counts[3] == 1 &&
    counts[4] == 1 &&
    counts[5] == 1
  )
    return 20;
  return 0;
};

// full_house() add up all the die, if two are same faced, and three are same faced die.

Yatzy.full_house = function (d1, d2, d3, d4, d5) {
  var counts;
  var _2 = false;
  var i;
  var _2_at = 0;
  var _3 = false;
  var _3_at = 0;

  counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }

  for (i = 0; i != 6; i += 1)
    if (counts[i] == 2) {
      _2 = true;
      _2_at = i + 1;
    }

  for (i = 0; i != 6; i += 1)
    if (counts[i] == 3) {
      _3 = true;
      _3_at = i + 1;
    }

  if (_2 && _3) return _2_at * 2 + _3_at * 3;
  else return 0;
};

//chance() adds up all the faces of die, regardless of their face number.
Yatzy.chance = function (d1, d2, d3, d4, d5) {
  var total = 0;
  const values = [d1, d2, d3, d4, d5];

  values.forEach((val) => {
    total += val;
  });

  return total;
};

// yatzy() returns top score 50, if all the die have exact same face.

Yatzy.yatzy = function (d1, d2, d3, d4, d5) {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }
  for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
  return 0;
};

// module.exports = Yatzy;
