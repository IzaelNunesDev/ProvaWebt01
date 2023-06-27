import { useContext } from "react"
import CorContexto from "./MeuContexto"
const FuncaoD =()=>{
    const cores = useContext(CorContexto)
    return(
        <>
           <h1 style={{backgroundColor:cores.bkgD}}>Função D</h1> 
        </>
    )
}
export default FuncaoD