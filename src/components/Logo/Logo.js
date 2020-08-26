import React from 'react';

import { Container } from './styles';

function Logo({ firstName, lastName }) {
  return (
    <Container>
      <b>{firstName} </b>
      {lastName}
    </Container>
  );
}

export default Logo;
