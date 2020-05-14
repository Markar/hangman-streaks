import fullItalian from './italian.json';
const fullWordList = require('an-array-of-english-words');


const easyWordList = [
 'cat', 'dog', 'fish', 'green', 'red', 'blue', 'earth', 'brown', 'moon', 'star', 'boy',
 'man', 'girl', 'woman', 'school', 'meat', 'beef', 'purple', 'corn', 'mountain', 'ape', 
 'gape', 'grape', 'plate', 'fart', 'ear', 'soup', 'zoo', 'boo', 'blow', 'bone', 'phone',
 'brick', 'block', 'head', 'hair', 'glass', 'cup', 'toe', 'elbow', 'knee', 'buddy', 'friend', 
 'bird', 'baby', 'poo', 'cartoon', 'box', 'emu', 'mash', 'dig', 'big', 'pig', 'poop'
];
const mediumWordList = [
  'calendar', 'giraffe', 'binoculars', 'rapper', 'donkey', 'supernova', 'hangman', 'principal', 'zebra', 
  'rattlesnake', 'pizza', 'bread', 'broccoli', 'banana', 'vaporize', 'vampire', 'plane', 'planet', 'forest', 'city', 
  'gorge', 'canyon', 'clown', 'own', 'giggle', 'surgeon', 'doctor', 'coconut', 'category', 'human', 'plankton', 'mouse',
  'squeak', 'princess', 'prince', 'crown', 'throne', 'dagger', 'arrow', 'bolt', 'relic', 'artifact', 'pirate', 'loot', 
  'massacre', 'destroy', 'clash', 'troll', 'ogre', 'giant', 'dragon', 
];
const hardWordList = [
  'rhythm', 'aardvark', 'lenticular', 'display', 'ninja', 'turtle', 'dinosaur', 'alphabet', 'xylophone', 'zilch', 'lambast', 'bamboo',
  'wish', 'superstition', 'myth', 'cuneiform', 'guide', 'guise', 'guild', 'metropolis', 'gorge', 'chirurgeon', 'eloquent', 'embezzle',
  'razzle', 'enmity', 'erudite', 'fabricate', 'extricate', 'feral', 'flabbergasted', 'aghast', 'despot', 'forsake', 'haughty', 'hypocrisy', 
  'placate', 'solar', 'meticulous', 'modicum', 'inflection', 'obsequious', 'oblivion', 'panacea', 'cornucopia', 'serendipity', 'taciturn', 
  'sycophant', 'superfluous', 'fluidity', 'umbral', 'truculent', 'translucent', 'vociferous', 'zenith', 'accretion', 'aperture', 'atmosphere', 
  'azimuth', 'zenith', 'debris', 'eclipse', 'ellipse', 'ephemeral', 'electromagnetic', 'evolution', 'galaxy', 'supernova', 'corpse', 'grave',
  'cassowary', 'opalescent', 'pulverize', 
];  

const easyItalian = [
  'si', 'uno', 'tre', 'due', 'vino', 'pizza', 'pollo', 'manzo', 'gamba', 'si', 'no', 'ciao', 'anno', 'oggi',
  'birra', 'acqua', 'pesce', 'ora', 'fare', 'bello', 'sei', 'nove', 'dieci', 'salve', 'tu', 'come', 'dove', 
  'non', 'grande', 'poco', 'altro', 'loro', 'voi', 'verde', 'fumo', 'cielo', 'terra'
];

const mediumItalian = [
  'siesta', 'domani', 'ieri', 'secondo', 'minuto', 'usare', 'andare', 'venire', 'cinque', 'cirque',  'cuoco', 'marzo', 
  'buono', 'lontano', 'vedere', 'brutto', 'difficile', 'facile', 'vicino', 'lunedi', 'ottobre', 'giovedi', 'maggio', 
  'espresso', 'tonno', 'questo', 'nuvola', 
];

const hardItalian = [
  'impiegato', 'programmatore', 'preparare', 'calendario','arrivederci', 'orologio', 'settimana', 'mercoledi', 'maiaile', 'agnello', 
  'sprezzatura', 'passeggiata', 'crepuscolo', 'mozzafiato', 'magari', 'cucciolo', 'impiraressa', 'corteccia', 'orecchio', 'ginocchio', 
  'montagna', 'vecchio', 'smussato', 'lontano'
];

export function generateWord(setWord, difficulty, language = 'english') {
  
  let wordList = mediumWordList;

  if (language === 'English') {
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
      wordList = easyWordList.concat(mediumWordList, hardWordList);
    }
    if (difficulty === 'Dictionary') {
      wordList = fullWordList;
    }
  }
  
  if (language === 'Italian') {
    if (difficulty === 'Easy') {
      wordList = easyItalian;
    }
    if (difficulty === 'Medium') {
      wordList = mediumItalian;
    }
    if (difficulty === 'Hard') {
      wordList = hardItalian;
    }
    if (difficulty === 'Everything') {
      wordList = easyItalian.concat(mediumItalian, hardItalian);
    }
    if (difficulty === 'Dictionary') {
      wordList = fullItalian;
    }
  }

  let ran = Math.floor(Math.random() * wordList.length);    
  let word = wordList[ran];
  setWord(word);
  // used for debugging  
  // console.log('word', word);
  return wordList;
}