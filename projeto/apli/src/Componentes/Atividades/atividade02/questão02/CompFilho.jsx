import { useContext } from "react"
import PokemonContexto from "./Contexto"

const CompFilho =()=>{
    const numero = useContext(PokemonContexto)
    return(
        <>
            <h1>Componente Filho</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`} alt="" style={{width:"400px"}} />
        </>
    )
}
export default CompFilho