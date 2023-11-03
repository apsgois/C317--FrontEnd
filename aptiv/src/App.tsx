// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Signin from './pages/signin';
import ADMSignin from './pages/adm_signin';
import Home from './pages/home';
import GlobalStyle from './styles/globals';
import AdmHome from './pages/adm-home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ADMSignin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adm" element={<ADMSignin />} />
        <Route path="/adm-home" element={<AdmHome />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
