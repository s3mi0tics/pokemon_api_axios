import React, { useState } from 'react';
import axios from 'axios';

const FetchPokemon = () => {
    const [allPokemonNames, setAllPokemonNames] = useState(null);

    const clickHandler = e =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
            .then(response => { setAllPokemonNames(response.data.results) })
            .catch(err => {console.log(err)})
    }
    console.log(allPokemonNames)
    return(
    <div>
        <button className="btn btn-success m-5"
        onClick={clickHandler}
        >Fetch Pokemon</button>
        {
        allPokemonNames?
        allPokemonNames.map((item, i) => <p key={i}>{item.name}</p>)
        :<div></div>
        }
    </div>
    )
};

export default FetchPokemon;
