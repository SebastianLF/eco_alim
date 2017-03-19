import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

it('renders routes without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
});
