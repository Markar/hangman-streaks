const fullWordList = require('an-array-of-english-words');

const easyWordList = ['cat', 'dog', 'fish', 'green', 'red', 'blue', 'earth', 'brown', 'moon', 'star', 'boy', 'man', 'girl', 'woman', 'school', 'meat', 'beef', 'purple', 'corn'];
const mediumWordList = ['guide', 'guise', 'giraffe', 'binoculars', 'digger', 'rapper', 'donkey', 'supernova', 'hangman', 'principal', 'zebra'];
const hardWordList = ['rhythm', 'aardvark', 'lenticular', 'display', 'ninja', 'turtle', 'dinosaur', 'alphabet', 'xylophone', 'zilch', 'lambast'];  

export function generateWord(setWord, difficulty) {

  let wordList = fullWordList;

  if (difficulty === 'Easy') {
    wordList = easyWordList;
  }
  if (difficulty === 'Medium') {
    wordList = mediumWordList;
  }
  if (difficulty === 'Hard') {
    wordList = hardWordList;
  }
  if (difficulty === 'Everything') {
    wordList = fullWordList;
  }

  let ran = Math.floor(Math.random() * wordList.length);    
  let word = wordList[ran];
  setWord(word);
  console.log('word', word);
  return wordList;
}