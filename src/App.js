import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from './components/Context';
import ListProducts from './components/ListProducts';
import NavScrollExample from './components/Navigator';
import UpdateItem from './components/UpdateItem';
import AddItem from './components/AddItem';
import Favorites from './components/Favorites';
import Login from './Login';
import ClientList from './ClinetCoponents/ClientList';
import Cart from './ClinetCoponents/Cart';

function App() {
  return (
    <div className="App">
      <Provider>
      <NavScrollExample/>

      <Routes>
      <Route path="/" element ={<Login/>}/>
      <Route path='/ClientsUI' element={<ClientList/>}/>
      <Route path='/SellersUI' element={<ListProducts/>}/>
      <Route path='/UpdateItem' element={<UpdateItem/>}/>
      <Route path='/AddItem' element={<AddItem/>}/>
     <Route path='/Favorites' element={<Favorites/>}/>
     <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
