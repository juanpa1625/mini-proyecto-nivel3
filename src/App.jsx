import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import { Modal } from './components/Modal'; 
import staysData from './data/stays.json';

const App = () => {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [searchValues, setSearchValues] = useState({ location: '', guests: '' });

  useEffect(() => {
    setStays(staysData);
    setFilteredStays(staysData); 
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Navbar toggleModal={toggleModal} />
      <section className="hero">
        <h2>Stays in Finland</h2>
        <span>12+ stays</span>
      </section>
      <CardList stays={filteredStays} />
      <footer>
        <h4>Created by Juanpa</h4>
      </footer>

      {isModalOpen && ( // Condicional para mostrar el modal
        <Modal 
          toggleModal={toggleModal} 
          stays={stays} 
          setFilteredStays={setFilteredStays} 
          searchValues={searchValues}
          setSearchValues={setSearchValues}
        />
      )}
    </div>
  );
};

export default App;
