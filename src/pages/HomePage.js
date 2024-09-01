import React from 'react';
import SpellList from '../components/SpellList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSpellClick = (spellIndex) => {
    navigate(`/spell/${spellIndex}`);
  };

  return (
    <div className="home-page">
      <h1>Listagem de Magias</h1>
      <SpellList onSpellClick={handleSpellClick} />
    </div>
  );
};

export default HomePage;
