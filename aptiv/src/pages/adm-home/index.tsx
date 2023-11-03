import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CompanyLogo, Container, Content, Footer, Logo, PrivacyText, TopBar, center } from './styles';
import Aptiv from '../../image/AptivLogo.png';
import { Button, Input, Paper, TextField } from '@mui/material';
import { AiFillFileAdd } from 'react-icons/ai';

const drawerWidth = 250;

interface IAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#343a40', // Cor de fundo do formulário
  color: 'white', // Cor do texto do formulário
  width: '550px',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TopBar>
        <Logo src={Aptiv} alt="Logo da Empresa" />
        {/* <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon color="primary" />
        </button> */}
      </TopBar>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* <Box
        component="main"
        sx={{
          p: 3,
          backgroundColor: '#343a40', // Cor de fundo do conteúdo principal
          minHeight: '100vh',
        }}
      > */}

        <div
          style={{
            paddingRight: '10px',
            paddingLeft: '10px',
            backgroundColor: '#343a40',
            display: 'flex',
            height: '100%',
            flexDirection: 'row',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ backgroundColor: '#343a40', height: '100%', zIndex: 9999 }}>
              <Divider />
              <List style={{ color: 'white' }}>
                {['Cadastro', 'Agrupamento', 'Atalho', 'Usuários'].map((text, index) => (
                  <ListItem key={text} disablePadding style={{ color: 'white' }}>
                    <ListItemButton>
                      <ListItemIcon style={{ color: 'white' }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: open ? '300px' : '300px' }}
          >
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

                <Button
                  variant="contained"
                  style={{ backgroundColor: '#ff3e0c', color: 'white' }}
                  onClick={handleAddItem}
                >
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
        </div>
      </div>
    </>
  );

  return (
    <Container>
      {/* <Box sx={{ display: 'flex' }}> */}
      {/* Barra lateral (Drawer) */}
      <AppBar open={open}>
        <TopBar>
          <Logo src={Aptiv} alt="Logo da Empresa" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </TopBar>
      </AppBar>

      {/* <Box
        component="main"
        sx={{
          p: 3,
          backgroundColor: '#343a40', // Cor de fundo do conteúdo principal
          minHeight: '100vh',
        }}
      > */}
      <DrawerHeader />

      {/* Conteúdo principal (formulário) */}
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
            p: 3,
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
      {/* </Box> */}

      {/* Barra lateral (Drawer) */}
      {/* <Drawer
        sx={{
          width: drawerWidth,
          marginTop: '60px',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#343a40',
            color: 'white',
            boxSizing: 'border-box',
            paddingTop: '60px',
          },
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      > */}
      <Divider />
      <List>
        {['Cadastro', 'Agrupamento', 'Atalho', 'Usuários'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* </Drawer> */}
      {/* </Box> */}
      <Footer>
        <CompanyLogo src={Aptiv} alt="Logo da Empresa" />
        <PrivacyText>Espirito Santo do Pinhal</PrivacyText>
      </Footer>
    </Container>
  );
}
