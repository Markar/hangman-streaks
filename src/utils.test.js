import { generateWord } from './utils.js';

describe('Test Utils Functions', () => {
  it('Test generateWord for easy', () => {
    let wordList = generateWord(jest.fn(), 'Easy');    
    expect(wordList.length).toBe(19);
  });
  it('Test generateWord for medium', () => {
    let wordList = generateWord(jest.fn(), 'Medium');  
    expect(wordList.length).toBe(11);
  });
  it('Test generateWord for hard', () => {
    let wordList = generateWord(jest.fn(), 'Hard');    
    expect(wordList.length).toBe(11);
  });
  it('Test generateWord for Everything', () => {
    let wordList = generateWord(jest.fn(), 'Everything');    
    expect(wordList.length).toBe(274937);
  });
});
