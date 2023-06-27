import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

const FuncaoC =()=>{
    const cores = useContext(CorContexto)
    return(
        <div>
            <h1 style={{backgroundColor:cores.bkgC}}>Função C</h1>
            <FuncaoD/>
        </div>
   
   )                    
}
export default FuncaoC