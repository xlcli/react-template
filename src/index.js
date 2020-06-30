import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from '@/models/store';

import '@/index.less';

function App() {
  const name = 'jxl';
  return (
    <Provider globalVal={name}>
      <Demo />
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
