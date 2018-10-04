import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App';;
import { Provider } from 'react-redux';
import reducer from './reducers';
const store = createStore(reducer);

//ReactDOM.render(<AddItem />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)