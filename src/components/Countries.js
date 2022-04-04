import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("")
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
    }, []); // Call back

    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />

                {radios.map((continent) => (
                <li>
                    <input type="radio" 
                    id={continent}
                    name="continentRadio"
                    checked={continent === selectedRadio} // Si oui true si non false
                    onChange={(e) => setSelectedRadio(e.target.id)}
                     />
                    <label htmlFor={continent}>{continent}</label>
                </li>
                ))}
            </ul>
            {selectedRadio && ( /* selectedRadio est true */
                <button onClick = {() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
            <ul>
                {/* Affiche les listes de pays */}
                {/* Slice limite le nombre */}
                {data
                .filter((country) => country.continents[0].includes(selectedRadio))
                .sort((a, b) => b.population -a.population) // Permet de trier par nombre de population
                .slice(0, rangeValue).map((country, index) => (
                <Card key={index} country={country} /> // Va chercher le composant 250 fois
                ))}
            </ul>
        </div>
    );
};

export default Countries;