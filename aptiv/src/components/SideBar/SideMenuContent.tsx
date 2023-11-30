// SideMenuContent.tsx
import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface ISideMenuContentProps {
  handleOptionClick: (option: string) => void;
}

const SideMenuContent: React.FC<ISideMenuContentProps> = ({ handleOptionClick }) => (
  <>
    <Divider />
    <List>
      {['Cadastro', 'Agrupamento', 'Atalho', 'Usuários', 'Sair'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => handleOptionClick(text)}>
            <ListItemIcon>{text === 'Cadastro' ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </>
);

export default SideMenuContent;
