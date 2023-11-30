// styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBar = styled.div`
  top: 0;
  width: 100%;
  background-color: #ff3e0c;
  text-align: start;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: -200px; /* Inicia fora da tela, ajuste conforme necessário */
  width: 200px;
  height: 100%;
  background-color: #2c3e50;
  padding-top: 60px; /* Ajuste conforme necessário */
  transition: left 0.3s ease; /* Adiciona uma animação suave */

  @media (max-width: 600px) {
    left: 0; /* Em telas menores que 600px, a SideMenu aparecerá na tela */
  }
`;

export const Logo = styled.img`
  top: 10px;
  max-width: 100%; /* A imagem se ajustará à largura da barra */
  max-height: 20px; /* Altura máxima da imagem */
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #343a40;
  padding: 30px 10%; /* Ajuste o padding conforme necessário */

  @media (max-width: 768px) {
    padding: 30px 5%; /* Ajuste o padding para dispositivos móveis */
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 50px;
  display: flex;
  flex-direction: column;
  font-family: 'Formular';
`;

export const Footer = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #343a40; // Cor de fundo desejada
  color: white; // Cor do texto desejada
  padding: 10px; // Adicione o padding desejado
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

export const center = styled.div`
  width: 50%; /* ou a largura desejada */
  text-align: center;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const MenuItem = styled.div`
  padding: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;
