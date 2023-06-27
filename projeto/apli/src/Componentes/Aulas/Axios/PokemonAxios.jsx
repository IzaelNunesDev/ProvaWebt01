import axios from "axios"
import { useEffect, useState } from "react"
const PokemonAxios=()=>{
    const [id,setId]= useState(1)
    const [nome,setNome]= useState("")
    const [imagem,setImagem] = useState("")
    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                }
            )
            .catch(
                (error)=>console.log(error)
            )
        }
        ,
        [id]
    )

    return (
        <>
            <h3>Nome: {nome}</h3>
            <img src={imagem} style={{width:"400px"}} />
            <button
                onClick={
                    ()=>{
                        setId((prev)=>prev+1)
                    }
                }
            >
                Próximo Pokemon
            </button>
        </>
    )
}
export default PokemonAxios