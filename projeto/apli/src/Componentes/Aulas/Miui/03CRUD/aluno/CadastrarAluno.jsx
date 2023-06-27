import { TextField, Typography, Box,  Button, MenuItem, FormControl, InputLabel, Select} from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState(0)
  


    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const novoAluno = {nome,curso,ira}
        axios.post("http://localhost:3001/aluno/register",novoAluno)
        .then(
            (response)=>{
                alert(`Aluno ID ${response.data._id} adicionado!`)
                navigate("/listarAluno")
            }
        )
        .catch(error=>console.log(error))
    }



    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno 
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />
            


            <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="select-tit-label">Curso</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="SI">Sistema De Informação</MenuItem>
                        <MenuItem value="CC">Ciencia Da Computação</MenuItem>
                        <MenuItem value="ES">Engenharia De Software</MenuItem>
                        <MenuItem value="EC">Engenharia Da Computação</MenuItem>
                        <MenuItem value="RC">Redes De Computadores</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    name="ira"
                    label="Ira"
                    onChange={(event) => setIra(event.target.value)}
                />

                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 3 }}
                    >
                        Cadastrar
                    </Button>
                </Box>

            </Box>
        </>
    )
}
export default Cadastrar