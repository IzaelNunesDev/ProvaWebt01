import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

const FuncaoC =()=>{
    return(
        <>
            <CorContexto.Consumer>
            {
                ({nome,cor2})=>{
                    return(
                        <div>
                            <h1 style={{backgroundColor:cor2}}>Função C {nome}</h1>
                        </div>
                    )
                }
            }
            
        </CorContexto.Consumer>
        <FuncaoD/>
        </>
    )
}
export default FuncaoC