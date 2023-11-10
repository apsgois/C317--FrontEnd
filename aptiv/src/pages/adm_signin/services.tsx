import { useNavigate } from 'react-router-dom';

const handleSignIn = async (username: string, password: string, navigateFunction: Function) => {
  const requestBody = {
    mat: parseInt(username),
    password: parseInt(password),
  };
  console.log(requestBody);
  try {
    const response = await fetch('https://rxprd9ni6e.execute-api.us-east-1.amazonaws.com/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      console.log('OK');
      navigateFunction('/home');
      // navigate('/home');
    } else {
      alert('Falha na autenticação. Verifique suas credenciais.');
    }
  } catch (error) {
    console.error('Erro durante a autenticação', error);
    alert('Erro durante a autenticação. Por favor, tente novamente.');
  }
};

export default handleSignIn;
