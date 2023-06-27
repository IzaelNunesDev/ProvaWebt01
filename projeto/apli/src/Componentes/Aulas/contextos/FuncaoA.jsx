import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"
const FuncaoA =()=>{
    const cor = "red"
    return(
        <CorContexto.Provider value={{cor:cor, nome: "Maizena", cor2:"green"}}>
            <h1 style={{backgroundColor:cor}}>Função B</h1>
            <FuncaoB/>
            <FuncaoC/>
        </CorContexto.Provider>     
    )
}
export default FuncaoA