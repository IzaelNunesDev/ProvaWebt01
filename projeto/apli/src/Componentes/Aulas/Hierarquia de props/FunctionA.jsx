import FunctionB from "./FunctionB"
const FunctionA =()=>{
    return(
        <>
            <h1>Componente A</h1>
            <h3><FunctionB x ={4} y={4}/> </h3>
        </>
    )
}
export default FunctionA