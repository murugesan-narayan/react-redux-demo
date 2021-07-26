import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PepsiContainer from './components/PepsiContainer';
import BulkCakeContainer from './components/BulkCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <BulkCakeContainer />
        <IceCreamContainer />
        <PepsiContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
