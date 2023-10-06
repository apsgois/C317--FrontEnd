import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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
    button {
      background: #ff0000;
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
        background: #ff4545;
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
