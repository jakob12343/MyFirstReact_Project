import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from './components/Context';
import ListProducts from './components/ListProducts';
import NavScrollExample from './components/Navigator';
import UpdateItem from './components/UpdateItem';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <Provider>
      <NavScrollExample/>

      <Routes>
      <Route path="/" element ={<ListProducts/>}/>
      <Route path='/UpdateItem' element={<UpdateItem/>}/>
      <Route path='/AddItem' element={<AddItem/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
