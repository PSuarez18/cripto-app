import  { useState } from 'react';
import './Select.css';

type MenuItem = {
 name: string;
 path: string;
};

const menuItems: MenuItem[] = [
 { name: 'Inicio', path: '/inicio' },
 { name: 'Moneda Divisa', path: '/moneda-divisa' },
 { name: 'Criptomoneda', path: '/criptomoneda' },
 { name: 'Gráficos', path: '/graficos' },
 { name: 'Acerca de Nosotros', path: '/acerca-de-nosotros' },
];

function Select() {
 const [selectedItem, setSelectedItem] = useState(menuItems[0]);

 const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
 };

 return (
    <div className="App">
      <div className="menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={selectedItem.name === item.name ? 'selected' : ''}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="content">
        {/* Aquí deberías renderizar el contenido correspondiente al elemento seleccionado en el menú */}
        {selectedItem.name}
      </div>
    </div>
 );
}

export default Select;

