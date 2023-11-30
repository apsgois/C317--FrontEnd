import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  max-width: 1200px; /* Adapte conforme necessário */
  margin: 0 auto; /* Centraliza o conteúdo */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin: auto;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #fff;
    }
    input {
      width: 100%;
      padding: 10px; /* Adapte conforme necessário */
      color: #fff;
      /* Outros estilos */
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

  @media (max-width: 700px) {
    form {
      margin: 40px 0;
      max-width: 80%;
      text-align: center;
      h1 {
        margin-bottom: 14px;
        color: #fff;
      }
    }
    form input {
      padding: 8px; /* Reduza o padding para os campos de input em telas menores */
      /* Outros estilos específicos para telas menores */
    }
  }
`;
