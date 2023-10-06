// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Signin from './pages/signin';
import Home from './pages/home';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
