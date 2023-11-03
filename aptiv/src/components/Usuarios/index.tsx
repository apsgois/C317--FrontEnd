import React from 'react';

interface ICadastroFormProps {
  onSubmit: () => void; // Adicione props conforme necessário
}

const UsuariosForm: React.FC = () => {
  return (
    <form>
      <h2>Agrupamento na Tela</h2>
      {/* Adicione campos de formulário, botões, etc. conforme necessário */}
      <button type="button">Enviar</button>
    </form>
  );
};

export default UsuariosForm;
