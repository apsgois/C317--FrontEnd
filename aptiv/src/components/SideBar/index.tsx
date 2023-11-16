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

const SideMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
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
          {selectedOption === 'Cadastro' && <CadastroForm />}
          {selectedOption === 'Agrupamento' && <div>Opções de Agrupamento</div>}
          {selectedOption === 'Atalho' && <div>Opções de Atalho</div>}
          {selectedOption === 'Usuários' && <UsuariosForm />}
          {selectedOption === 'Sair' && <ADMSignin />}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
