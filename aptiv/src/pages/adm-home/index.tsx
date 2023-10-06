// pages/Home.tsx
import React from 'react';
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
import { IoIosMedkit, IoMdPulse, IoMdRestaurant } from 'react-icons/io';
import { MdOutlineHealthAndSafety, MdOutlinePolicy } from 'react-icons/md';
import { SiWorldhealthorganization } from 'react-icons/si';
import { BsFillBusFrontFill, BsFillGiftFill } from 'react-icons/bs';
import { TbPlayFootball } from 'react-icons/tb';
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
} from './styles';
import Aptiv from '../../image/AptivLogo.png';
const AdmHome: React.FC = () => {
  return (
    <Container>
      <TopBar>
        {/* Inclua o componente Logo aqui */}
        <Logo src={Aptiv} alt="Logo da Empresa" />
      </TopBar>
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
