import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './store/auth-store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
