import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Button, Paper, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';
import { AiFillFileAdd } from 'react-icons/ai';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#343a40', // Cor de fundo do formulário
  color: 'white', // Cor do texto do formulário
  width: '550px',
  [theme.breakpoints.down('sm')]: {
    width: '180%', // Altera a largura para 100% em telas menores que 600px
    padding: theme.spacing(-2),
  },
}));

const UsuariosForm: React.FC<{ onBackButtonClick: () => void }> = ({ onBackButtonClick }) => {
  const [userList, setUserList] = useState<{ id: string; mat: number; kpi: string; admin: string; unidade: string }[]>(
    [],
  );
  const [userData, setUserData] = useState({
    mat: 0,
    password: '',
    kpi: 'True',
    admin: 'False',
    unidade: 'MG',
  });

  const handleInputChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;

    const numericValue = name === 'mat' && value !== '' ? parseInt(value as string, 10) : value;

    setUserData((prevData) => ({ ...prevData, [name as string]: numericValue }));
  };

  const handleRefreshClick = () => {
    // Adicione a lógica de atualização aqui
    window.location.reload();
  };

  const handleAddItem = () => {
    fetch('https://rxprd9ni6e.execute-api.us-east-1.amazonaws.com/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Dados enviados com sucesso');
        console.log('Dados enviados com sucesso:', data);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };
  const handleDeleteUser = async (userId: string) => {
    try {
      const response = await fetch(`https://rxprd9ni6e.execute-api.us-east-1.amazonaws.com/user/delete?mat=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualize a lista de usuários após a exclusão
        alert('Usuario deletado com sucesso');
        setUserList((prevUserList) => prevUserList.filter((user) => user.id !== userId));
        window.location.reload();
        // fetchUserList();
      } else {
        console.error('Erro ao excluir usuário');
      }
    } catch (error) {
      console.error('Erro ao excluir usuário', error);
    }
  };

  const fetchUserList = async () => {
    try {
      const response = await fetch('https://rxprd9ni6e.execute-api.us-east-1.amazonaws.com/user');
      if (response.ok) {
        const data = await response.json();
        setUserList(data);
      } else {
        console.error('Erro ao obter a lista de usuários');
      }
    } catch (error) {
      console.error('Erro ao obter a lista de usuários', error);
    }
  };
  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '400px' }}>
      <Button
        onClick={handleRefreshClick}
        style={{ backgroundColor: '#ff3e0c', color: 'white', marginTop: 'auto', marginBottom: '10px' }}
      >
        Voltar
      </Button>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Cadastro de Usuários
        </Typography>
      </FormContainer>
      <Divider />
      <FormContainer>
        <Box
          sx={{
            backgroundColor: '#343a40',
          }}
        >
          <TextField
            fullWidth
            label="Matrícula"
            name="mat"
            value={userData.mat}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white', borderColor: 'white' },
            }}
          />
          <TextField
            fullWidth
            label="Senha"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white', borderColor: 'white' },
            }}
          />
          <FormControl fullWidth>
            <InputLabel style={{ color: 'white' }}>Admin</InputLabel>
            <Select
              name="admin"
              value={userData.admin}
              onChange={(e) => handleInputChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
              style={{ color: 'white' }}
            >
              <MenuItem value="True">True</MenuItem>
              <MenuItem value="False">False</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel style={{ color: 'white' }}>KPI</InputLabel>
            <Select
              name="kpi" // Corrigido para name="kpi"
              value={userData.kpi}
              onChange={(e) => handleInputChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
              style={{ color: 'white' }}
            >
              <MenuItem value="True">True</MenuItem>
              <MenuItem value="False">False</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel style={{ color: 'white' }}>Unidade</InputLabel>
            <Select
              name="unidade"
              value={userData.unidade}
              onChange={(e) => handleInputChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
              style={{ color: 'white' }}
            >
              <MenuItem value="ES">ES</MenuItem>
              <MenuItem value="SP">SP</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" style={{ backgroundColor: '#ff3e0c', color: 'white' }} onClick={handleAddItem}>
            Adicionar
          </Button>
        </Box>
      </FormContainer>
      <Divider />
      <FormContainer>
        <Box
          sx={{
            p: 3,
            backgroundColor: '#343a40', // Cor de fundo do conteúdo principal
          }}
        >
          <Typography variant="h5" gutterBottom>
            Lista de todos os Usuários
          </Typography>
          <List>
            {userList.map((user) => (
              <ListItem key={user.id}>
                <ListItemText primary={user.mat} />
                <ListItemText primary={user.unidade} />
                <IconButton onClick={() => handleDeleteUser(user.mat.toString())} style={{ color: '#ff3e0c' }}>
                  <FaRegTrashAlt />
                  {/* Substitua por um ícone de lixeira */}
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </FormContainer>
    </div>
  );
};

export default UsuariosForm;
