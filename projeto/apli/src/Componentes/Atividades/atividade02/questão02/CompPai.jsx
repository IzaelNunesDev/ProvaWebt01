import { useContext } from "react"
import CompFilho from "./CompFilho"
import PokemonContexto from "./Contexto"
const CompPai =()=>{
    const numero = useContext(PokemonContexto)
    return(
        <>
            <h1>Componente Pai</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`} alt="" style={{width:"400px"}} />
            <CompFilho/>
        </>
    )
}
export default CompPai