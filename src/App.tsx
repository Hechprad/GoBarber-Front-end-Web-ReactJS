import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Jorge' }}>
      <SignIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
