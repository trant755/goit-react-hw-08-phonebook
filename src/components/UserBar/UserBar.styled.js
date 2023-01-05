import styled from 'styled-components';
import { Btn } from 'components/AddContactBtn/AddContactBtn.styled';

export const Conatainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.textGreen};
`;

export const AuthorizationBtnsBox = styled.div`
  display: flex;
  gap: 8px;

  margin-left: auto;
  margin-right: auto;

  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid;
  border-color: rgb(0, 0, 0, 5%);
`;

export const AuthorizationBtn = styled(Btn)`
  color: white;
  border-color: white;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.textGreen};
    background-color: white;

    outline: none;
  }
`;

export const UserInfoBox = styled.a`
  margin-left: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[3]}px ${p => p.theme.space[1]}px;

  border: ${p => p.theme.borders.bold};
  border-radius: 25px;
  border-color: white;
`;

export const UserInfo = styled.p`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${p => p.theme.colors.textGreen};
  width: 30px;
  z-index: 1;
  margin-right: ${p => p.theme.space[3]}px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: -1;

    width: 30px;
    height: 30px;
    background-color: #aff2e5;

    border-radius: ${p => p.theme.radii.round};
  }
`;

export const UserName = styled.span`
  color: white;
`;
