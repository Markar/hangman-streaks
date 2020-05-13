# Mark's Notes

1. I implemented Enzyme testing for the WordDisplay component and used the 
built in Jest functionality to write tests for utils.js (in utils.test.js)

2. I added some additional functionality to the game including: 
- The text on the win screen gets larger as you rack up more consecutive wins
- Start screen with instructions
- Difficulty settings, with different categories of words
- Added reach-router to transition from the start screen to the game
- Keeping track of your win streak through playthroughs to make it more exciting
- Rainbow text for some flair in a few places
- Italian word libraries
- Mobile support

# TODO: 
- Add a sqlite db to store win streaks
- Add an input for player name to save
- Move streak info from lose screen to win screen once high scores are available
- Add more game modes with varying numbers of strikes
- Add different types of visualization



# hangman

Implement the classic [Hangman
game](<https://en.wikipedia.org/wiki/Hangman_(game)>) in React.

Feel free to use any tools and techniques that you would use in your
day-to-day development.

## Instructions

1. Generate a new **private** repo using this template repo.
2. Provide your answers to your generated repo.
3. Once your repo is ready for review, add `voleer-dev` as a collaborator for your repo.
4. Wait for our response.

## Requirements

- Generate a random word for the player to guess
- Provide a mechanism for the player to input their letter guesses
- When the player guesses a letter it should reveal matching instances of
  that letter in the word
- The game is won if the player is able to correctly guess all of the letters
  in the word before making 10 incorrect guesses
- If the player has guessed 10 times without revealing the word, the game is
  lost

The UI should include the following, but feel free to add more if you see the
need or would like to get creative.

- A masked version of the word, with correct guesses revealed
  - For example, if the word is “voleer” and the player has guessed the
    letter “e” then the word should be displayed as: \_ \_ _ E E _
- An input mechanism of some kind which allows the player to input their next guess
- An indication of which letters the player has already guessed incorrectly
- An indication of how many remaining incorrect guesses the player has before
  the game is over
- An indication of win/loss state when the game is over
- The ability to start a new game once the game is over

## Included

The following items are included in the base application. Please feel free to
add additional libraries or tools if you feel they would help.

- Create React App

  - If needed, the original Create React App README is saved
    [here](README_CRA.md) for reference
  - We don't anticipate that you'll need enough additional configuration to
    require ejecting, but feel free to do so if it helps

- Component to draw the Hangman
  ([src/components/Hangman/Hangman.jsx](src/components/Hangman/Hangman.jsx))

- React Storybook
  - Run using `npm run storybook` to see already implemented components, or
    write your own stories to help you implement your solution
