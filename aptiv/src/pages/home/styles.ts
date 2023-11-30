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
  padding: 20px; /* Ajuste o padding geral */
`;

export const IconLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%; /* Garante que a largura seja 100% */
  margin-top: 20px; /* Adiciona espaço superior para os ícones */
`;

export const IconLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const CircleIcon = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: #000000; /* Cor de fundo laranja */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ff3e0c; /* Borda branca */
  svg {
    width: 50%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 70px; /* Ajuste o tamanho do ícone para celular */
    height: 70px;
    svg {
      width: 60%; /* Ajuste o tamanho do svg para celular */
    }
  }
`;

export const IconLabel = styled.span`
  margin-top: 10px;
  text-align: center; /* Alinhando o texto ao centro */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
`;

export const CompanyLogo = styled.img`
  width: 142.31px;
  height: 18px;
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
