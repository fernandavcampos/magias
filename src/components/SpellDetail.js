import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpellDetails } from '../api';

const SpellDetail = () => {
  const { index } = useParams();
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpellDetails = async () => {
      const data = await getSpellDetails(index);
      setSpell(data);
      setLoading(false);
    };

    fetchSpellDetails();
  }, [index]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!spell) {
    return <div>Spell not found</div>;
  }

  return (
    <div className="spell-detail">
      <h2>{spell.name}</h2>
      <p><strong>Level:</strong> {spell.level}</p>
      <p><strong>School:</strong> {spell.school.name}</p>
      <p><strong>Casting Time:</strong> {spell.casting_time}</p>
      <p><strong>Range:</strong> {spell.range}</p>
      <p><strong>Components:</strong> {spell.components.join(', ')}</p>
      {spell.material && <p><strong>Material:</strong> {spell.material}</p>}
      <p><strong>Duration:</strong> {spell.duration}</p>
      <p><strong>Description:</strong> {spell.desc.join(' ')}</p>
      {spell.higher_level && <p><strong>At Higher Levels:</strong> {spell.higher_level.join(' ')}</p>}
    </div>
  );
};

export default SpellDetail;
