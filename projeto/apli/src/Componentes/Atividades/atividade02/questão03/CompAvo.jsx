import { useState } from "react";
import CompPai from "./CompPai";
import PokemonContexto from "./Contexto";

const CompAvo = () => {
//let numero = 1    
const [numero,setNumero] = useState(1)
const acaoBotao = () =>{
  //alert("clicou novamente!")
  //numero+=1
  setNumero(numero+1)
} 
  return (
    <>
      <PokemonContexto.Provider value={numero}>
        <h1>ComponenteAvo</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="" style={{width:"400px"}} />
        <button
            onClick={acaoBotao}
        > 
        Aumentar Número
        </button>

        <CompPai />
      </PokemonContexto.Provider>
    </>
  );
};
export default CompAvo;
