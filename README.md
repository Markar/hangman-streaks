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
