import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CompanyLogo, CompanyLogo1, Container, Content, Footer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImage from '../../image/info.png';
import { PrivacyText } from '../home/styles';
import Aptiv from '../../image/AptivLogo.png';

const ADMSignin: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Lógica de autenticação, se necessário...

    // Navega para a página "home" após o login
    navigate('/adm-home');
  };

  return (
    <Container>
      <Content>
        <form>
          <CompanyLogo src={logoImage} alt="Logo" />
          <h1>Seja bem-vindo</h1>

          <h2>Essa aplicação é responsável por controlar a aplicação web do infoAptiv.</h2>

          <Input icon={FiUser} name="Usuário" placeholder="Digite o nome de usuário" autoComplete="false" />
          <Input icon={FiLock} name="senha" type="password" placeholder="Digite sua senha" />

          <Button onClick={handleSignIn}>Entrar</Button>
          <h1></h1>
          {/* <a href="forgot">Esqueci minha senha</a> */}
          <Footer>
            <CompanyLogo1 src={Aptiv} alt="Logo da Empresa" />
            <PrivacyText> 2023 - APTIV - Global Technology Company.</PrivacyText>
            <PrivacyText> All rights reserverd.</PrivacyText>
          </Footer>
        </form>
      </Content>
    </Container>
  );
};

export default ADMSignin;
