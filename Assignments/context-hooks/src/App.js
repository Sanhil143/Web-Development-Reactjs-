import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <h2><u>Items</u></h2>
      <Item name='Iphone 14' price={150000} />
      <Item name='Iphone 13' price={130000} />
      <Item name='Iphone 12' price={120000} />
      <Item name='Iphone 11' price={100000} />
      <Cart />
    </div>
  );
}

export default App;
