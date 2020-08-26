import React, { useState } from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, ContainerButtons, Button } from './styles';

function Buttons() {
  const titles = ['Services', 'Works', 'Notes', 'Contacts'];

  const objTitles = {
    Services: false,
    Works: false,
    Notes: false,
    Contacts: false,
  };

  const [titleSelected, setTitleSelected] = useState(objTitles);

  function handleClick(item) {
    setTitleSelected((prevstate) => {
      titles.forEach((title) => {
        prevstate[title] = false;
      });
      prevstate[item] = true;
      return { ...prevstate };
    });
  }

  return (
    <Container>
      {titles.map((title, index) => (
        <ContainerButtons key={index} onClick={() => handleClick(title)}>
          <MdKeyboardArrowLeft
            color={titleSelected[title] ? '#71fca9' : 'transparent'}
            size='20px'
          />
          <Button isSelected={titleSelected[title]} size='15px'>
            {title}
          </Button>
          <MdKeyboardArrowRight
            color={titleSelected[title] ? '#71fca9' : 'transparent'}
            size='20px'
          />
        </ContainerButtons>
      ))}
    </Container>
  );
}

export default Buttons;
