import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CadastroForm from '../Cadastro';
import UsuariosForm from '../Usuarios';
import navegate from '../../pages/adm_signin/navegate';
import ADMSignin from '../../pages/adm_signin';
import { useTheme } from '@mui/material/styles';
import { MdOutlineExitToApp } from 'react-icons/md';

const SideMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCadastroFormOpen, setIsCadastroFormOpen] = useState(false);
  const [isUsuariosFormOpen, setIsUsuariosFormOpen] = useState(false);

  const theme = useTheme();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (option === 'Cadastro') {
      setIsCadastroFormOpen(true);
      setIsUsuariosFormOpen(false);
    } else if (option === 'Usuários') {
      setIsUsuariosFormOpen(true);
      setIsCadastroFormOpen(false);
    } else {
      setIsCadastroFormOpen(true);
      setIsUsuariosFormOpen(true);
    }
  };

  const handleBackButtonClick = () => {
    setIsCadastroFormOpen(true);
    setIsUsuariosFormOpen(true);
    setSelectedOption(null);
  };

  return (
    <div
      style={{
        paddingRight: '10px',
        paddingLeft: '10px',
        backgroundColor: '#343a40',
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: 30,
        left: isCadastroFormOpen || isUsuariosFormOpen ? `-${theme.breakpoints.values.sm}px` : '0',
        height: '100%',
        width: '250px',
        zIndex: 9999,
        transition: 'left 0.3s ease',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#343a40', height: '100%', zIndex: 9999 }}>
          <Divider />
          <List style={{ color: 'white' }}>
            {['Cadastro', 'Agrupamento', 'Atalho', 'Usuários', 'Sair'].map((text) => (
              <ListItem key={text} disablePadding style={{ color: 'white' }}>
                <ListItemButton onClick={() => handleOptionClick(text)}>
                  <ListItemIcon style={{ color: 'white' }}>
                    {text === 'Cadastro' ? <InboxIcon /> : <MailIcon />}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {selectedOption && (
        <div style={{ flex: 1, marginLeft: '10px', color: 'white' }}>
          {/* Renderize aqui as opções correspondentes ao ícone selecionado */}
          {selectedOption === 'Cadastro' && isCadastroFormOpen && (
            <CadastroForm onBackButtonClick={handleBackButtonClick} />
          )}
          {selectedOption === 'Agrupamento' && <div>Opções de Agrupamento</div>}
          {selectedOption === 'Atalho' && <div>Opções de Atalho</div>}
          {selectedOption === 'Usuários' && isUsuariosFormOpen && (
            <UsuariosForm onBackButtonClick={handleBackButtonClick} />
          )}
          {selectedOption === 'Sair' && <ADMSignin />}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
