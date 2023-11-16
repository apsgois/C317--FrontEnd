import * as React from 'react';

import { Logo, TopBar } from './styles';
import Aptiv from '../../image/AptivLogo.png';

import SideMenu from '../../components/SideBar';
import CadastroForm from '../../components/Cadastro';

export default function PersistentDrawerLeft() {
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
        <SideMenu />
      </div>
    </>
  );
}
