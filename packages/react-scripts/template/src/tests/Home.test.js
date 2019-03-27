import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/pages/Home';

describe('Home ', () => {
   it('Defining Home Component', () => {
     expect(Home).toBeDefined();
   });
 
   it('it should render the Home component', () => {
     const wrapper = shallow(<Home />);
     expect(wrapper);
   });
 });
 