import React, { useEffect } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CompanyLogo, CompanyLogo1, Container, Content, Footer, Header2, Header3 } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImage from '../../image/info.png';
import { PrivacyText } from '../home/styles';
import Aptiv from '../../image/AptivLogo.png';
import handleSignIn from './services';
import useCustomNavigate from './navegate';
import { useUser } from './UserContext';

const ADMSignin: React.FC = () => {
  const navigate = useNavigate();
  const { setUserContext } = useUser();

  const handleClick = async () => {
    const usernameElement = document.getElementById('username') as HTMLInputElement | null;
    const passwordElement = document.getElementById('password') as HTMLInputElement | null;

    if (usernameElement && passwordElement) {
      const username = usernameElement.value;
      const password = passwordElement.value;

      if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const signInSuccess = await handleSignIn(username, password, navigate, setUserContext);
    }
  };
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Container>
      <Content>
        <form>
          <CompanyLogo src={logoImage} alt="Logo" />
          <Header2>Seja bem-vindo</Header2>
          <Header3>Essa aplicação é responsável por controlar a aplicação web do infoAptiv.</Header3>

          <Input
            id="username"
            icon={FiUser}
            name="Usuário"
            placeholder="Digite o nome de usuário"
            autoComplete="false"
          />

          <Input id="password" icon={FiLock} name="senha" type="password" placeholder="Digite sua senha" />

          <Button onClick={handleClick}>Entrar</Button>
          <h1></h1>
          {/* <a href="forgot">Esqueci minha senha</a> */}
          <Footer>
            <CompanyLogo1 src={Aptiv} alt="Logo da Empresa" />
            <PrivacyText> 2023 - APTIV - Global Technology Company.</PrivacyText>
            <PrivacyText> All rights reserved.</PrivacyText>
          </Footer>
        </form>
      </Content>
    </Container>
  );
};

export default ADMSignin;
