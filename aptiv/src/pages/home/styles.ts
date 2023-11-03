// styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Formular';
  padding: 0 70px;
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
  width: 150px;
  height: 150px;
  border-radius: 200%;
  border-radius: 50%;
  background-color: #000000; /* Cor de fundo laranja */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ff3e0c; /* Borda branca */
  svg {
    /* Ajuste o tamanho do ícone conforme necessário */
    width: 50%; /* Use uma porcentagem do tamanho do CircleIcon */
    height: auto; /* Mantenha a proporção original */
  }
`;

export const Icon = styled.span`
  font-size: 300px;
  color: #ffffff; /* Cor do ícone branca */
`;
export const IconLabel = styled.span`
  margin-top: 10px;

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
