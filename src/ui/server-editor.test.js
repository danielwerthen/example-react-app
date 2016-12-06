import React from 'react';
import ReactDOM from 'react-dom';
import ServerEditor from './server-editor';

const schema = {
  type: "object",
  required: ['name', 'protocol', 'port'],
  properties: {
    name: {
      type: 'string',
    },
    protocol: {
      type: 'string',
      enum: ['HTTP', 'HTTPS'],
    },
    port: {
      type: 'number',
    },
  }
};

describe('ServerEditor', () => {
  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ServerEditor schema={schema} />, div);
    expect(div.innerHTML).toMatchSnapshot();
  });
});
