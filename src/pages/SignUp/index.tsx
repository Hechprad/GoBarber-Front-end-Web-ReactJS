import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/button';
import Input from '../../components/input';

import * as s from './styles';

const SignUp: React.FC = () => (
  <s.Container>
    <s.Background />
    <s.Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </s.Content>
  </s.Container>
);

export default SignUp;
