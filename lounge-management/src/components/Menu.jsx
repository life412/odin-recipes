import { menu } from "../data/menu";
import "../styles/Menu.css";

export default function Menu({ onAddToOrder }) {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id} className="menu-item">
            <div>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
              <p>{item.description}</p>
            </div>
            <button onClick={() => onAddToOrder(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
