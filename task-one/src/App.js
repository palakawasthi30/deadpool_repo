import logo from './logo.svg';
import CompA from './CompA';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <CompA />
    </div>
    </Provider>
  );
}

export default App;
