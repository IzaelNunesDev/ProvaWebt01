import { useContext } from "react"
import CorContexto from "./MeuContexto"
const FuncaoD =()=>{
    const {cor2} = useContext(CorContexto)
    return(
        <>
           <h1 style={{backgroundColor:cor2}}>Função D</h1> 
        </>
    )
}
export default FuncaoD