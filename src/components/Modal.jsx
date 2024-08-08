import React, { useState, useEffect } from 'react';

export const Modal = ({ toggleModal, stays, setFilteredStays, searchValues, setSearchValues }) => {
  const [locations, setLocations] = useState([]);
  const [guests, setGuests] = useState(searchValues.guests || 0);

  useEffect(() => {
    setLocations(getLocations());
  }, [stays]);

  const getLocations = () => {
    const uniqueLocations = new Set();
    stays.forEach(stay => {
      const loc = `${stay.city}, ${stay.country}`;
      uniqueLocations.add(loc);
    });
    return Array.from(uniqueLocations);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValues(prev => ({ ...prev, [name]: value }));
    if (name === 'location') {
      setLocations(getLocations().filter(location =>
        location.toLowerCase().includes(value.toLowerCase())
      ));
    }
  };

  const filterData = () => {
    const { location, guests } = searchValues;
    let filtered = stays;

    if (location.trim() !== '') {
      filtered = filtered.filter(stay =>
        (`${stay.city}, ${stay.country}`.toLowerCase().includes(location.toLowerCase()))
      );
    }

    if (guests.trim() !== '') {
      filtered = filtered.filter(stay => stay.maxGuests >= parseInt(guests, 10));
    }

    setFilteredStays(filtered);
    toggleModal(); // Cierra el modal después de filtrar
  };

  const incrementGuests = () => {
    setGuests(prev => prev + 1);
    setSearchValues(prev => ({ ...prev, guests: guests + 1 }));
  };

  const decrementGuests = () => {
    if (guests > 0) {
      setGuests(prev => prev - 1);
      setSearchValues(prev => ({ ...prev, guests: guests - 1 }));
    }
  };

  return (
    <div className='modal'>
      <div>
        <span onClick={toggleModal}>&times;</span>
        <nav>
          <div className="input-group">
            <span>Location</span>
            <input
              type="search"
              name="location"
              placeholder='Search location'
              onChange={handleChange}
              value={searchValues.location || ''}
            />
              <ul className='location-list'>
            {locations.slice(0, 10).map((location, index) => (
              <li key={index} onClick={() => setSearchValues(prev => ({ ...prev, location }))}>
                {location}
              </li>
            ))}
          </ul>
          </div>
          <div className="input-group">
            <span>Guests</span>
            <input
              type="number"
              name="guests"
              placeholder='Number of guests'
              onChange={handleChange}
              value={searchValues.guests || ''}
            />
          </div>
          <button onClick={filterData}>Search</button>
          <button onClick={decrementGuests}>-</button>
                <div className="counter-display">{guests}</div>
                <button onClick={incrementGuests}>+</button>
        </nav>
        <div className="container">
        
        </div>
      </div>
    </div>
  );
};
