import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: calc(100% - 50px);

  border: 2px solid;
  border-top: none;
  border-radius: 0 0 4px 4px;
  border-color: ${p => p.theme.colors.borderGray};
`;

export const SectionBar = styled.div`
  width: 200px;
  padding: ${p => p.theme.space[4]}px;

  border-right: 2px solid;
  border-color: ${p => p.theme.colors.borderGray};
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; ;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.textGreen};
`;
