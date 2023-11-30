import styled from 'styled-components';
import { List, ListItemButton, ListItemIcon } from '@mui/material';

export const SideMenuContainer = styled.div`
  padding: 10px;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
`;

export const MenuList = styled(List)`
  color: white;
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: 10px;
  color: white;
`;

export const StyledListItemButton = styled(ListItemButton)`
  color: white;
`;

export const ListItemIconWrapper = styled(ListItemIcon)`
  color: white;
`;


