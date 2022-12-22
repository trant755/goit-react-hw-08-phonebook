import styled from 'styled-components';
import { Form as FormFor, Field } from 'formik';

export const Form = styled(FormFor)`
  width: 400px;
  padding: ${p => p.theme.space[4]}px;
`;

export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  color: ${p => p.theme.colors.textGreen};

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.midle};
  font-size: ${p => p.theme.fontSizes.ms};

  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled(Field)`
  height: 32px;
  width: 100%;

  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.borderGray};
  outline-color: #41bfb3;
`;

export const AddBtn = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.midle};
  font-size: ${p => p.theme.fontSizes.ms};
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
