import React from 'react';

import { Container } from './styles';

function Button({...props}) {
  return (
    <Container {...props}>
      <h1>CLICK ME</h1>
    </Container>
  );
}

export default Button;