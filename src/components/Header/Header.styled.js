import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 50px;
  z-index: 1000;

  background-color: #7ebfb3;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid;
  border-color: rgb(0, 0, 0, 5%);
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: white;
`;
