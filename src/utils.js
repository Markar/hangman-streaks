const fullWordList = require('an-array-of-english-words');

const easyWordList = ['cat', 'dog', 'fish', 'green', 'red', 'blue', 'earth', 'brown', 'moon', 'star', 'boy', 'man', 'girl', 'woman', 'school', 'meat', 'beef', 'purple', 'corn'];
const hardWordList = ['rhythm', 'aardvark', 'lenticular', 'display', 'hangman', 'ninja', 'turtle', 'dinosaur', 'alphabet'];  

export function generateWord(setWord) {
  let wordList = fullWordList;

  let ran = Math.floor(Math.random() * wordList.length);    
  let word = wordList[ran];
  setWord(word);
  console.log('word', word);
}