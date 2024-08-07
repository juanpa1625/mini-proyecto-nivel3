import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import staysData from './data/stays.json';

const App = () => {
  const [stays, setStays] = useState([]);
  console.log(stays)

  useEffect(() => {
    setStays(staysData);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section className='hero'> 
        <h2>stays in finland </h2>
        <span>12+stays</span>
      </section>
      <CardList stays={stays} />
      <footer>
        <h4> created by juanpa</h4>
      </footer>
    </div>

  );
};

export default App;
