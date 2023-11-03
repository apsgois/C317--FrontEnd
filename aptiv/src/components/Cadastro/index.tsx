// CadastroForm.tsx
import React from 'react';

const CadastroForm: React.FC = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#add8e6', padding: '10px', textAlign: 'left' }}>
        <h2>Cadastros</h2>
        <p>Cadastros e agrupamentos</p>
      </div>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label>
          Nome do agrupamento:
          <input type="text" />
        </label>
        {/* Adicione outros campos de formulário, botões, etc. conforme necessário */}
      </form>
    </div>
  );
};

export default CadastroForm;
