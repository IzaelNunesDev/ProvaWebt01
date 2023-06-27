import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import React from 'react';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './est.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${StyledTableCell.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${StyledTableCell.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Listar = () => {
  const [alunos, setAlunos] = useState([]);
  const [mudou, setMudou] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/aluno/listar')
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteAluno(id) {
    if (window.confirm('Deseja Excluir? ' + id)) {
      axios
        .delete(`http://localhost:3001/aluno/delete/${id}`)
        .then((response) => {
          deleteTeste(id);
          setMudou(!mudou);
        })
        .catch((error) => console.log(error));
    }
  }
  function deleteTeste(id) {
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i]._id == id) {
        alunos.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  let contador = 0;
  let media = 0;

  for (let i = 0; i < alunos.length; i++) {
    contador += alunos[i].ira
  }

  media = contador / alunos.length

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Listar Aluno
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NOME</StyledTableCell>
              <StyledTableCell>CURSO</StyledTableCell>
              <StyledTableCell>IRA</StyledTableCell>
              <StyledTableCell align="center">AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <StyledTableRow
                key={aluno._id}>
                <StyledTableCell>{aluno._id}</StyledTableCell>
                <StyledTableCell>{aluno.nome}</StyledTableCell>
                <StyledTableCell>{aluno.curso}</StyledTableCell>
                <StyledTableCell>{aluno.ira}</StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => deleteAluno(aluno._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      sx={{ ml: 2 }}
                      component={Link}
                      to={`/editarAluno/${aluno._id}`}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Media Aritmética</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>Média do IRA:</StyledTableCell>
              <StyledTableCell>{media}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Listar;