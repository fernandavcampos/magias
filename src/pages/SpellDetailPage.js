import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpellDetailPage = () => {
  const { index } = useParams(); // useParams retorna os parâmetros da rota
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    const fetchSpellDetails = async () => {
      const response = await fetch(`https://www.dnd5eapi.co/api/spells/${index}`);
      const data = await response.json();
      setSpell(data);
    };

    fetchSpellDetails();
  }, [index]);

  if (!spell) return <div>Loading...</div>;

  return (
    <div>
      <h1>{spell.name}</h1>
      <p>{spell.desc.join(' ')}</p>
    </div>
  );
};

export default SpellDetailPage;
