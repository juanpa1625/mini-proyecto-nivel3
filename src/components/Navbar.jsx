import React, { useState } from 'react';
import './Navbar.css';

const availableLocations = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland'
];

const Navbar = ({ toggleModal }) => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  const handleLocationClick = () => {
    toggleModal();
  };

  const handleGuestsClick = () => {
    toggleModal();
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <nav className="navbar">
      <img src="logo.png" alt="Logo" className="navbar__logo" />
      
      <div className="navbar__search">
        <input
          type="text"
          value={location}
          onClick={handleLocationClick}
          onChange={handleLocationChange}
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
          onClick={handleGuestsClick}
          onChange={handleGuestsChange}
          placeholder="Add guests"
          className="navbar__input"
        />

        <button onClick={toggleModal} className="navbar__button">
          <img src="buscar.png" alt="buscar" className="fas fa-search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
