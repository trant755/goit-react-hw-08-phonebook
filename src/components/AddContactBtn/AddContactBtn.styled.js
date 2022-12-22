import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${p => p.theme.space[3]}px;

  border-top: 1px solid;
  border-color: ${p => p.theme.colors.borderGray};
`;

export const Btn = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.sl};
  color: ${p => p.theme.colors.textGreen};

  border: ${p => p.theme.borders.bold};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.textGreen};

  background-color: transparent;

  :hover,
  :focus {
    color: white;
    background-color: ${p => p.theme.colors.textGreen};
  }
`;

export const PlusSymb = styled.span`
  font-size: ${p => p.theme.fontSizes.ms};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Text = styled.span``;
