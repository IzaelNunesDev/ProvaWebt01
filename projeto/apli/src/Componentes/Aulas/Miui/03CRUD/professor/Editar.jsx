import { TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Editar = () => {
    let {id} = useParams()
    const navigate = useNavigate()  
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({ es: false, al: false, ds: false, mc: false })

    const { es, al, ds, mc } = ai

    useEffect(() => { 
        axios.get(`http://localhost:3001/professor/retrieve/${id}`)
        .then((response) => {
            setNome(response.data.nome)
            setCurso(response.data.curso)
            setTitulacao(response.data.titulacao)
            if (response.data.ai) {
                setAi(response.data.ai)
            }
        })
        .catch(error => console.log(error))
    }, [])
    

    function handleSubmit(event) {
        event.preventDefault()
        const professorAtualizado = { nome, curso, titulacao, ai }
        axios.put(`http://localhost:3001/professor/update/${id}`, professorAtualizado)
        .then((response) => {
            alert(`Professor ID ${response.data._id} atualizado!`)
            navigate("/listarProfessor")
        })
        .catch(error => console.log(error))
    }

    function handleCheckbox(event) {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked,
        })
    }

    return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Editar Professor {nome}

        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id='nome'
            name='nome'
            value={nome}
            label="Nome Completo"
            autoFocus
            onChange={(event) => setNome(event.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id='curso'
            name='curso'
            value={curso}
            label="Curso"
            onChange={(event) => setCurso(event.target.value)}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="select-tit-label">Titulação</InputLabel>
            <Select
              labelId='select-tit-label'
              label="Titulação"
              required
              value={titulacao}
              onChange={(event) => setTitulacao(event.target.value)}
            >
              <MenuItem value="GRAD">Graduação</MenuItem>
              <MenuItem value="MEST">Mestrado</MenuItem>
              <MenuItem value="DOUT">Doutorado</MenuItem>
            </Select>

          </FormControl>

          <FormControl
            component="fieldset"
            variant="standard"
            sx={{ mt: 2, ml: 2 }}
          >
            <FormLabel
              component="legend"
              sx={{ fontSize: 12, mb: 2 }}
            >
              Áreas de Interesse
            </FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox} />} label="Engenharia de Software" />
              <FormControlLabel control={<Checkbox checked={al} name='al' onChange={handleCheckbox} />} label="Algoritmos" />
              <FormControlLabel control={<Checkbox checked={ds} name='ds' onChange={handleCheckbox} />} label="Desenvolvimento de Software" />
              <FormControlLabel control={<Checkbox checked={mc} name='mc' onChange={handleCheckbox} />} label="Matemática Computacional" />
            </FormGroup>
          </FormControl>

          <Box
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ my: 3 }}
            >
              Atualizar
            </Button>
          </Box>

        </Box>
      </Typography>

    </div>
  )

}
export default Editar
