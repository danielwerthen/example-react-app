import React from 'react';
import ReactDOM from 'react-dom';
import ServerStatus from './server-status';

describe('ServerStatus', () => {
  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ServerStatus />, div);
    expect(div.innerHTML).toMatchSnapshot();
  });
  it('should match snapshot when running', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ServerStatus
      running
    />, div);
    expect(div.innerHTML).toMatchSnapshot();
  });
});
