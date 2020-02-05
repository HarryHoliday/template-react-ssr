import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(app(), div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders learn react link', () => {
  const { getByText } = render(app());
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
