import Yatzy from "../lib/yatzy.js";
// testing Yatzy method

console.log(
  "Score for the repeated occurance of 1's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 1)
);
console.log(
  "Score for the repeated occurance of 2's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 2)
);
console.log(
  "Score for the repeated occurance of 3's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 3)
);
console.log(
  "Score for the repeated occurance of 4's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 4)
);
console.log(
  "Score for the repeated occurance of 5's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 5)
);
console.log(
  "Score for the repeated occurance of 6's : " +
    Yatzy.checkOccurance(6, 2, 3, 4, 5, 6)
);
console.log("Score for one pair : " + Yatzy.score_pair(6, 2, 3, 4, 5));
console.log("Score for two pairs : " + Yatzy.two_pair(6, 2, 3, 4, 5));
console.log(
  "Score for three of one kind : " + Yatzy.three_of_a_kind(6, 2, 3, 4, 5)
);
console.log(
  "Score for four of one kind : " + Yatzy.four_of_a_kind(6, 2, 3, 4, 5)
);
console.log(
  "Score for low-end straight : " + Yatzy.small_straight(6, 2, 3, 4, 5)
);
console.log(
  "Score for high-end straight : " + Yatzy.large_straight(6, 2, 3, 4, 5)
);
console.log(
  "Score for one pair and three of a kind : " + Yatzy.full_house(6, 2, 3, 4, 5)
);
console.log(
  "Score from addition of all values : " + Yatzy.chance(6, 2, 3, 4, 5)
);
console.log("Score for five of a kind : " + Yatzy.yatzy(6, 2, 3, 4, 5));
