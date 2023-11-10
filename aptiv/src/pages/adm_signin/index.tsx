import React, { useEffect } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CompanyLogo, CompanyLogo1, Container, Content, Footer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImage from '../../image/info.png';
import { PrivacyText } from '../home/styles';
import Aptiv from '../../image/AptivLogo.png';
import handleSignIn from './services';
import useCustomNavigate from './navegate';

const ADMSignin: React.FC = () => {
  const customNavigate = useCustomNavigate();
  const navigate = useNavigate();
  const handleClick = async () => {
    const usernameElement = document.getElementById('username') as HTMLInputElement | null;
    const passwordElement = document.getElementById('password') as HTMLInputElement | null;

    if (usernameElement && passwordElement) {
      const username = usernameElement.value;
      const password = passwordElement.value;

      // Adicione sua lógica de validação aqui
      if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return; // Impede a continuação se os campos não estiverem preenchidos
      }

      // Chame a função handleSignIn para autenticação
      const signInSuccess = await handleSignIn(username, password, customNavigate);
    }
  };
  useEffect(() => {
    // Este efeito será executado sempre que a autenticação for alterada
    // Se deseja impedir o usuário de navegar para trás, você pode redirecionar novamente
    // para a página anterior quando detectar uma mudança na autenticação
    navigate('/'); // Substitua '/' pela rota da página de login
  }, []);

  return (
    <Container>
      <Content>
        <form>
          <CompanyLogo src={logoImage} alt="Logo" />
          <h1>Seja bem-vindo</h1>

          <h2>Essa aplicação é responsável por controlar a aplicação web do infoAptiv.</h2>

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
