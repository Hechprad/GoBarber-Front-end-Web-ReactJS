import React from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Toastcontainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>

    <Toastcontainer />

    <GlobalStyle />
  </>
);

export default App;
