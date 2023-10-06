import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const CompanyLogo = styled.img`
  width: 250px; /* Largura desejada */
  height: 71px; /* Altura desejada */
  margin-bottom: 10px;
`;

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
`;
export const CompanyLogo1 = styled.img`
  width: 142.31px; /* Largura desejada */
  height: 18px; /* Altura desejada */
  margin-bottom: 10px;
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
    max-width: 400px;
    text-align: center;
    h1 {
      margin-bottom: 20px;
      color: #fff;
      text-align: left;
    }
    h2 {
      margin-bottom: 30px; /* Reduzi a margem para 16px */
      color: #fff;
      text-align: left; /* Adicionei o alinhamento à esquerda */
      font-size: 18px; /* Adicionei um tamanho de fonte menor */
    }
    input {
      color: #fff; /* Cor do texto digitado */
      /* Adiciona qualquer estilo adicional que você desejar para o input */
    }
    button {
      background: #ff3e0c;
      border-radius: 10px;
      border: none;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #ffffff;
      font-weight: bold;
      margin-top: 16px;
      transition: background 0.2s;

      &:hover {
        background: #ff3e0c;
      }
    }
    a {
      color: #ffffff;
      text-decoration: none;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    text-decoration: none;
  }
`;
