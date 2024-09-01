import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSpells } from '../api';

const SpellList = () => {
  const [spells, setSpells] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de busca
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpells = async () => {
      const data = await getSpells();
      setSpells(data.results);
    };

    fetchSpells();
  }, []);
  

  const handleSpellClick = (index) => {
    navigate(`/spell/${index}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Atualiza o termo de busca
  };

  // Filtra as magias com base no termo de busca
  const filteredSpells = spells.filter(spell =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar uma magia..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="spell-list">
        {filteredSpells.map(spell => (
          <div key={spell.index} onClick={() => handleSpellClick(spell.index)}>
            {spell.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpellList;
