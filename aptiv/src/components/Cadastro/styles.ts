import { styled } from 'styled-components';

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
