const { Types } = require('mongoose');

const usernames = [
  'Bowser',
  'Donkey Kong',
  'Mario',
  'Yoshi',
  'Luigi',
  'KingDDD',
  'Samus',
  'Link',
  'Kratos',
  'Ratchet',
  'Klank',
  'Sephiroth',
  'Cloud',
  'Ifrit',
  'Sora',
  'Donald',
  'Goofy',
  'Malifecent',
  'Aladdin',
  'Jack Skellington',
];

const emails = [
  'testOne@test.com',
  'testTwo@test.com',
  'testThree@test.com',
  'testFour@test.com',
  'testFive@test.com',
  'testSix@test.com',
  'testSeven@test.com',
  'testEight@test.com',
  'testNine@test.com',
  'testTen@test.com',
  'testEleven@test.com',
  'testTwelve@test.com',
  'testThirteen@test.com',
  'testFourteen@test.com',
  'testFifteen@test.com',
  'testSixteen@test.com',
  'testSeventeen@test.com',
  'testEighteen@test.com',
  'testNineteen@test.com',
  'testTwenty@test.com',
];

const friends = [
  'Madonna',
  'Eminem',
  'Weezy',
  'GhostfaceKillah',
  'MethodMan',
  'RZA',
  'GZA',
  'ODC',
  'InspectahDeck',
  'MastahKillah',
  'UGod',
  'Kanye',
  'MFDoom',
  'Tupak',
  'BIG',
  'Muddy Waters',
  'Pinhead',
  'JPEGMAFIA',
  'Denzel Curry',
  'Jidenna',
];

const thoughts = [
  'I could lose weight',
  'Did I leave the oven on?',
  'I should buy a boat',
  'John is having a birthday in three weeks',
  'Daniel would love that book for christmas',
  'I think it is time for a new dining table',
  'That would have been the perfect line to use on that cashier girl at the bodega downtown',
  'I need a cigarette',
  'I wonder how she is doing?',
  'I wonder how he is doing?',
  'Need to check my email for the receipt',
  'That would be a good line in a movie',
  'I wonder if there are any new internet browsers',
  'I definitely have cancer',
  'Got to do something with the backyard, it is a mess',
  'Need to get the chili recipe from mom, perfect weather for that',
  'Tyrion ended up a total fool trusting Daenarys. Only a moron could fail to see how evil she was',
  'I need to rewatch the Wire',
  'She totally wanted my number',
  'I am going back to that store and buying that jacket',
];



// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}`;
// Gets a random email
const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

const getRandomFriend = () =>
`${getRandomArrItem(friends)}`;

// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomArrItem(usernames)
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUserName, getRandomEmail, getRandomFriend, getRandomThoughts };
