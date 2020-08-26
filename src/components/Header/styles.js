import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  flex-direction: row;
  width: 100%;
  color: #fff;
  font-size: 30px;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 13px;
  color: #4b4c4f;
  width: 500px;
`;

export const ContainerEmail = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #333438;
  border-radius: 160px;
  cursor: pointer;
`;
