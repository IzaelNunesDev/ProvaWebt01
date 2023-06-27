import React, { useState } from "react";

const Questao2 = () => {
    const [virar, setVirar] = useState(true);
    return (
        <>
            {(virar) ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" /> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"/>}

            <button onClick={() => setVirar(!virar)}>Mude a posição</button>     
        </>
    );
}

export default Questao2