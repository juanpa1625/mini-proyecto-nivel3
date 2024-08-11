import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import staysData from './data/stays.json';

const App = () => {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]); 

  useEffect(() => {
    setStays(staysData);
    setFilteredStays(staysData); 
  }, []);

  const handleSearch = (location, guests) => {
    const filtered = stays.filter(stay => 
      stay.city === location.split(',')[0] && stay.maxGuests >= guests
    );
    setFilteredStays(filtered);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <section className="hero">
        <h2>Stays in Finland</h2>
        <span>{filteredStays.length}+ stays</span>
      </section>
      <CardList stays={filteredStays} />
      <footer>
        <h4>Created by Juanpa</h4>
      </footer>
    </div>
  );
};

export default App;
