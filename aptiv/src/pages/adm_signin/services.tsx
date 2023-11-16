type User = {
  _id: string;
  mat: number;
  kpi: string;
  admin: string;
  unidade: string;
};

type NavigateFunction = (path: string) => void;
type SetUserContextFunction = (userData: User) => void;

const handleSignIn = async (
  username: string,
  password: string,
  navigate: NavigateFunction,
  setUserContext: SetUserContextFunction,
) => {
  const requestBody = {
    mat: parseInt(username),
    password: password,
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
      const userData: User = await response.json();
      setUserContext(userData);
      navigate('/home');
    } else {
      alert('Falha na autenticação. Verifique suas credenciais.');
    }
  } catch (error) {
    console.error('Erro durante a autenticação', error);
    alert('Erro durante a autenticação. Por favor, tente novamente.');
  }
};

export default handleSignIn;
