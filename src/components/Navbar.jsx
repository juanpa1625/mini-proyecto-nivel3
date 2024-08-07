import React, { useState, useEffect } from 'react';
import './Navbar.css';
import data from '../data/stays.json';  

const Navbar = () => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
   
    const uniqueLocations = Array.from(new Set(data.map(loc => `${loc.city}, ${loc.country}`)));
    setLocations(uniqueLocations);
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search clicked', { location, guests });
  };

  return (
    <nav className="navbar">
      
      <img src="logo.png" alt="Logo" className="navbar__logo" />
     
      
      <div className="navbar__search">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Select location"
          list="locations-list"
          className="navbar__input"
        />
        <datalist id="locations-list">
          {locations.map((loc, index) => (
            <option 
              key={index} 
              value={loc} 
            />
          ))}
        </datalist>

        <input
          type="number"
          min="1"
          value={guests}
          onChange={handleGuestsChange}
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
