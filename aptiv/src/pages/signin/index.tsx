import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/home');
  };

  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="registro" placeholder="Registro" autoComplete="false" />
          <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

          <Button onClick={handleSignIn}>Acessar</Button>

          {/* <a href="forgot">Esqueci minha senha</a> */}
        </form>
      </Content>
    </Container>
  );
};

export default Signin;
