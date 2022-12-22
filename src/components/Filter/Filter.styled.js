import styled from 'styled-components';
import { Field } from 'formik';

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${p => p.theme.space[4]}px;
  width: 100%;

  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.borderGray};
`;

export const LabelInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.midle};

  color: ${p => p.theme.colors.textGreen};
`;

export const Input = styled(Field)`
  height: 25px;

  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.borderGray};
  outline-color: #41bfb3;
`;
