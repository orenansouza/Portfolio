import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
`;

export const ContainerButtons = styled(Container)`
  justify-content: space-evenly;
`;

export const Button = styled.div`
  font-size: ${(props) => (props.size ? props.size : '15px')};
  cursor: pointer;
  color: ${(props) => (props.isSelected ? '#71fca9' : '#fff')};
`;
