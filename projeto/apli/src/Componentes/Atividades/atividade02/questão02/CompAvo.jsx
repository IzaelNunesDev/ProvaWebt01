import CompPai from "./CompPai";
import PokemonContexto from "./Contexto";

const CompAvo = () => {
const numero = 1
  return (
    <>
      <PokemonContexto.Provider value={numero}>
        <h1>ComponenteAvo</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="" style={{width:"400px"}} />
        <CompPai />
      </PokemonContexto.Provider>
    </>
  );
};
export default CompAvo;
