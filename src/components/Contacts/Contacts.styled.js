import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  background-color: rgb(0, 0, 0, 1%);
  overflow-y: scroll;

  height: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
