import styled from 'styled-components';

export const ContactInfo = styled.p`
  display: flex;
  align-items: center;

  padding-right: ${p => p.theme.space[5]}px;
  width: 100%;
  height: 40px;
`;

export const Initials = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${p => p.theme.colors.textGreen};
  width: 40px;
  z-index: 1;
  margin-right: ${p => p.theme.space[4]}px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: -1;

    width: 40px;
    height: 40px;
    background-color: #aff2e5;

    border-radius: ${p => p.theme.radii.round};
  }
`;

export const Name = styled.span`
  width: 100%;
`;

export const Phone = styled.span`
  margin-left: auto;
  width: 100%;
`;

export const DeleteBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 28px;
  height: 28px;

  margin-right: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.textGreen};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.midle};
  font-size: ${p => p.theme.fontSizes.ms};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  border-color: ${p => p.theme.colors.textGreen};
  background-color: transparent;
  outline: none;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.textGreen};
    color: white;
  }
`;
