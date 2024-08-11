import React, { useState } from 'react';
import './Navbar.css';

const availableLocations = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland'
];

const Navbar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch(location, guests);
  };

  return (
    <nav className="navbar">
      <img src="logo.png" alt="Logo" className="navbar__logo" />
      
      <div className="navbar__search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Select location"
          list="locations-list"
          className="navbar__input"
        />
        <datalist id="locations-list">
          {availableLocations.map((loc, index) => (
            <option key={index} value={loc} />
          ))}
        </datalist>

        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Add guests"
          className="navbar__input"
        />

        <button onClick={handleSearch} className="navbar__button">
          <img src="buscar.png" alt="buscar" className="fas fa-search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
