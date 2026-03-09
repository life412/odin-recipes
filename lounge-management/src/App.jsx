
import { useState } from 'react';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (item) => {
    setOrder((prev) => [...prev, item]);
  };

  return (
    <div>
      <h1>Digital Lounge Ordering System</h1>
      <Menu onAddToOrder={handleAddToOrder} />
      <div style={{ maxWidth: 500, margin: '2rem auto', background: '#f9f9f9', padding: '1rem', borderRadius: 8 }}>
        <h2>Your Order</h2>
        {order.length === 0 ? (
          <p>No items in order.</p>
        ) : (
          <ul>
            {order.map((item, idx) => (
              <li key={idx}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
