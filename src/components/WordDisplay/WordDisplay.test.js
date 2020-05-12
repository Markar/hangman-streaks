import React from 'react';
import WordDisplay from './WordDisplay';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe('Example Test', () => {  
  it('should render the correct letters for aardvark', () => {
    const wrapper = shallow(
      <WordDisplay
        letters={'ad'}
        word={'aardvark'}         
      />
    );    
    
    let letters = wrapper.find('.correct--letters');
    
    expect(letters.text()).toBe("a a _ d _ a _ _ ");
  });
});
