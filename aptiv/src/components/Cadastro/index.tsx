// CadastroForm.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Input, Paper, TextField } from '@mui/material';
import { AiFillFileAdd } from 'react-icons/ai';
import { styled, useTheme } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#343a40', // Cor de fundo do formulário
  color: 'white', // Cor do texto do formulário
  width: '550px',
}));

const CadastroForm: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = React.useState('');
  const [itemList, setItemList] = React.useState<string[]>([]);

  const [files, setFiles] = React.useState<string[]>([]);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement;
    const fileList = fileInput.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      console.log('Arquivo selecionado:', file.name);
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Upload do arquivo:', selectedFile.name);
      setFiles([...files, selectedFile.name]);
      setSelectedFile(null);
    }
  };

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItemList([...itemList, itemName]);
      setItemName(''); // Limpa o campo de texto após adicionar o item
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '300px' }}>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Cadastro de Agrupamentos
        </Typography>
        {/* Adicione seu formulário aqui */}
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
            label="Nome do agrupamento"
            id="fullWidth"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white', borderColor: 'white' },
            }}
          />

          <Button variant="contained" style={{ backgroundColor: '#ff3e0c', color: 'white' }} onClick={handleAddItem}>
            Adicionar
          </Button>

          {/* Lista de itens */}
          <ul>
            {itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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
          <Paper
            elevation={3}
            style={{
              padding: 16,
              marginBottom: 16,
              backgroundColor: '#343a40',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <label htmlFor="fileInput">
              <IconButton component="span" style={{ color: '#ff3e0c' }} onClick={() => handleUpload()}>
                <AiFillFileAdd />
              </IconButton>
            </label>
            <Typography variant="body2" color="white" style={{ marginLeft: 8 }}>
              Aceita formatos: Excel, CSV, PDF:
            </Typography>
            <Input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
            <List>
              {files.map((fileName, index) => (
                <ListItem key={index}>
                  <ListItemText primary={fileName} style={{ color: 'white' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </FormContainer>
    </div>
  );
};

export default CadastroForm;
