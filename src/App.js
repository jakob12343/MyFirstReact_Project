import './App.css';
import { Provider } from './components/Context';
import ListProducts from './components/ListProducts';
import NavScrollExample from './components/Navigator';

function App() {
  return (
    <div className="App">
      <Provider>
      
      <NavScrollExample/>
      
      <ListProducts/>
      </Provider>
    </div>
  );
}

export default App;
