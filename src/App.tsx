import React from 'react';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
