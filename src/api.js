import axios from 'axios';

const API_BASE_URL =  "https://www.dnd5eapi.co/api";

export const getSpells = async() => {
    const response = await fetch(`${API_BASE_URL}/spells`);
    return await response.json();
}

export const getSpellDetail = async (index) => {
    const response = await fetch(`${API_BASE_URL}/spells/${index}`);
    return await response.json()
}

export const getSpellDetails = async (index) => {
    const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${index}`);
    console.log(response); // Verificar se os dados estão sendo recebidos
    return response.data;
  };