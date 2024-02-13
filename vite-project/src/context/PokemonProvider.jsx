import { useState } from "react";

// TODO: Import the PokemonContext

const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)

    // TODO: Add values to be included in the context here
    let contextValues = {}

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        { children }
    )
}

export default PokemonProvider;