import CorContexto from "./MeuContexto"
const FuncaoB =()=>{
    return(
        <CorContexto.Consumer>
            {
                ({cor})=>{
                    return(
                        <div>
                            <h1 style={{backgroundColor:cor}}>Função B</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}
export default FuncaoB