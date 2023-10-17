// styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px; /* ou qualquer valor desejado */
  margin: 0 auto; /* centralizar o conteúdo */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Formular';
`;
export const TopBar = styled.div`
  width: 100%;
  background-color: #ff3e0c;
  padding: 8px 0;
  text-align: start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: -100%; /* Inicia fora da tela */
  width: 200px;
  height: 100%;
  background-color: #2c3e50;
  padding-top: 60px; /* Ajuste conforme necessário */
  transition: left 0.3s ease; /* Adiciona uma animação suave */
`;

export const MenuItem = styled.div`
  padding: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

export const Logo = styled.img`
  max-width: 100%; /* A imagem se ajustará à largura da barra */
  max-height: 40px; /* Altura máxima da imagem */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin: auto;
  width: 100%;
  background: #343a40;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
  }
`;
export const IconLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1; /* Adicionando flex para ocupar todo o espaço disponível */
  transition: color 0.3s;

  &:hover {
    color: #007bff; /* Cor ao passar o mouse */
  }
`;

export const CircleIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #000000; /* Cor de fundo laranja */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ff3e0c; /* Borda branca */
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Icon = styled.span`
  font-size: 44px;
  color: #ffffff; /* Cor do ícone branca */
  align-items: center;
`;
export const IconLabel = styled.span`
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
`;

export const CompanyLogo = styled.img`
  width: 142.31px; /* Largura desejada */
  height: 18px; /* Altura desejada */
  margin-bottom: 10px;
`;

export const PrivacyText = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 5px;
`;

export const CityText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
