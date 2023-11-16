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
} from './styles';
import Aptiv from '../../image/AptivLogo.png';
import { useUser } from '../adm_signin/UserContext';

const Home: React.FC = () => {
  const { user } = useUser();
  console.log('Entrou na HOME');
  const isAdmin = user && user.admin === 'True';
  return (
    <Container>
      <form>
        <IconLinks>
          {/* Links com ícones dentro de círculos */}
          <IconLink to="/holerite">
            <CircleIcon>
              <FaFileInvoiceDollar />
            </CircleIcon>
            <IconLabel>Holerite</IconLabel>
          </IconLink>
          <IconLink to="https://www.uniodonto.coop.br/">
            <CircleIcon>
              <FaTooth />
            </CircleIcon>
            <IconLabel>Uniodonto</IconLabel>
          </IconLink>
          <IconLink to="/segurodeVida">
            <CircleIcon>
              <MdOutlineHealthAndSafety />
            </CircleIcon>
            <IconLabel>Seguro de Vida</IconLabel>
          </IconLink>
          <IconLink to="https://www.unimed.coop.br/site/">
            <CircleIcon>
              <FaCcMastercard />
            </CircleIcon>
            <IconLabel>Unimed</IconLabel>
          </IconLink>
          <IconLink to="https://policlinsaude.com.br/index.asp">
            <CircleIcon>
              <MdOutlinePolicy />
            </CircleIcon>
            <IconLabel>Policlin</IconLabel>
          </IconLink>
          <IconLink to="https://portal.sulamericaseguros.com.br/home.htm">
            <CircleIcon>
              <SiWorldhealthorganization />
            </CircleIcon>
            <IconLabel>Sul America</IconLabel>
          </IconLink>
          <IconLink to="/restaurante">
            <CircleIcon>
              <IoMdRestaurant />
            </CircleIcon>
            <IconLabel>Restaurante</IconLabel>
          </IconLink>
          <IconLink to="/frota">
            <CircleIcon>
              <BsFillBusFrontFill />
            </CircleIcon>
            <IconLabel>Frota</IconLabel>
          </IconLink>
          <IconLink to="/adc">
            <CircleIcon>
              <TbPlayFootball />
            </CircleIcon>
            <IconLabel>ADC</IconLabel>
          </IconLink>
          <IconLink to="/cartaofarmacia">
            <CircleIcon>
              <GiMedicines />
            </CircleIcon>
            <IconLabel>Cartão Farmácia</IconLabel>
          </IconLink>
          <IconLink to="https://banco.bradesco/html/classic/index.shtm">
            <CircleIcon>
              <HiOutlineBanknotes />
            </CircleIcon>
            <IconLabel>Bradesco</IconLabel>
          </IconLink>

          <IconLink to="/parcerias">
            <CircleIcon>
              <GiShakingHands />
            </CircleIcon>
            <IconLabel>Parcerias</IconLabel>
          </IconLink>
          <IconLink to="/beneficios">
            <CircleIcon>
              <BsFillGiftFill />
            </CircleIcon>
            <IconLabel>Benefícios</IconLabel>
          </IconLink>
          <IconLink to="/conduta">
            <CircleIcon>
              <BsFillGiftFill />
            </CircleIcon>
            <IconLabel>Conduta</IconLabel>
          </IconLink>
          <IconLink to="/cipa">
            <CircleIcon>
              <FaFireExtinguisher />
            </CircleIcon>
            <IconLabel>Cipa</IconLabel>
          </IconLink>
          <IconLink to="/chevrolet">
            <CircleIcon>
              <AiFillCar />
            </CircleIcon>
            <IconLabel>Chevrolet</IconLabel>
          </IconLink>
          <IconLinks>
            {/* ... Outros ícones */}

            {/* Exemplo de condicional para tornar o ícone disponível ou cinza */}
            <IconLink to={isAdmin ? '/adm-home' : '#'} style={{ pointerEvents: isAdmin ? 'auto' : 'none' }}>
              <CircleIcon style={{ color: isAdmin ? 'currentColor' : 'gray' }}>
                <RiAdminLine />
              </CircleIcon>
              <IconLabel style={{ color: isAdmin ? 'currentColor' : 'gray' }}>Admin</IconLabel>
            </IconLink>

            {/* ... Outros ícones */}
          </IconLinks>
          <IconLink to="https://wa.me/seuNumeroDoWhatsApp">
            <FaWhatsapp />
            <IconLabel>WhatsApp</IconLabel>
            <IconLabel>RH Atende</IconLabel>
          </IconLink>
        </IconLinks>
      </form>

      <Footer>
        <CompanyLogo src={Aptiv} alt="Logo da Empresa" />
        <PrivacyText>{user?.unidade}</PrivacyText>
      </Footer>
    </Container>
  );
};

export default Home;
