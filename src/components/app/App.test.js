import React from 'react';
import { render } from '@testing-library/react';
import Enzyme,{ shallow } from 'enzyme';

import Modal from "@mui/material/Modal";

 import Adapter from 'enzyme-adapter-react-16';
 

import App from './App';

import ModalComponent from './Modal';
// import { withStyles } from '@mui/material';
Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('opens modal when button is clicked', () => {
  const wrapper = shallow(<ModalComponent open={false}/>);
   expect(wrapper.find(Modal).prop('open')).toBe(false);
  // expect(wrapper.find(Modal)).toHaveLength(1);

  wrapper.find(("#Btton")).simulate('click');
  expect(wrapper.find(Modal).prop('open')).toBe(true);
 
});