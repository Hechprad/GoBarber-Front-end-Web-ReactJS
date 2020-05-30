import React from 'react';

import * as s from './styles';

interface TootipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TootipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <s.Container className={className}>
      {children}
      <span>{title}</span>
    </s.Container>
  );
};

export default Tooltip;
