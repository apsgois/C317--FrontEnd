// pages/Home.tsx
import React, { useRef, useState } from 'react';
import {
  FaHome,
  FaUser,
  FaFileInvoiceDollar,
  FaPhone,
  FaTooth,
  FaFireExtinguisher,
  FaUmbrella,
  FaCcMastercard,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoIosMedkit, IoMdPulse, IoMdRestaurant, IoMdImages } from 'react-icons/io';
import { MdOutlineHealthAndSafety, MdOutlinePolicy } from 'react-icons/md';
import { SiWorldhealthorganization } from 'react-icons/si';
import { BsFillBusFrontFill, BsFillGiftFill } from 'react-icons/bs';
import { TbPlayFootball, TbBaselineDensitySmall } from 'react-icons/tb';
import { GiMedicines, GiShakingHands } from 'react-icons/gi';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { RiAdminLine } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import {
  Container,
  IconLinks,
  IconLink,
  CircleIcon,
  IconLabel,
  CompanyLogo,
  PrivacyText,
  CityText,
  Footer,
  Content,
  TopBar,
  Logo,
  MenuButton,
  MenuItem,
  SideMenu,
  Icon,
} from './styles';
import Aptiv from '../../image/AptivLogo.png';

const AdmHome: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageIconClick = () => {
    // Abrir a seleção de imagem ao clicar no ícone
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container>
      <TopBar>
        <Logo src={Aptiv} alt="Logo da Empresa" />
        <MenuButton onClick={toggleMenu}>
          <Icon>
            <TbBaselineDensitySmall size={24} />
          </Icon>
        </MenuButton>
      </TopBar>
      <SideMenu style={{ left: isMenuOpen ? '0' : '-100%', top: '30px' }}>
        <div>
          <label>
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem Selecionada" />
            ) : (
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '70%',
                  backgroundColor: '#ccc',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleImageIconClick}
              >
                <IoMdImages size={50} color="#fff" />
              </div>
            )}
            {/* Input de arquivo oculto para selecionar imagem */}
            <input type="file" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
          </label>
        </div>
        <div>
          <CityText style={{ top: '50px' }}>MENU</CityText>
          <MenuItem>Cadastro</MenuItem>
          <MenuItem>Agrupamento</MenuItem>
          <MenuItem>Atalho</MenuItem>
          <MenuItem>Usuário</MenuItem>
          {/* Adicione mais opções conforme necessário */}
        </div>
      </SideMenu>
      <Content>
        <form></form>
      </Content>
      <Footer>
        <CompanyLogo src={Aptiv} alt="Logo da Empresa" />
        <PrivacyText>Espirito Santo do Pinhal</PrivacyText>
      </Footer>
    </Container>
  );
};

export default AdmHome;
