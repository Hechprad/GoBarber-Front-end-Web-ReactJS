import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as s from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <s.Container>
      {Icon && <Icon size={20} />}
      <s.Input {...rest} />
    </s.Container>
  );
};

export default Input;
