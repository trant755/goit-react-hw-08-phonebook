import { AuthorizationBtn } from 'components/UserBar/UserBar.styled';
import styled from 'styled-components';

export const UserMenuBox = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  overflow: hidden;
  pointer-events: ${p => (p.isOpen ? 'all' : 'none')};
`;

export const UserMenu = styled.div`
  transform: ${p => (p.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 250ms linear;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: ${p => p.theme.space[5]}px;

  width: 200px;
  height: 270px;
  background-color: ${p => p.theme.colors.bgDark};
`;

export const AvatarBox = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: ${p => p.theme.space[4]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.bgLight};

  border-radius: 50%;
`;

export const UserName = styled.p`
  color: white;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LogoutBtn = styled(AuthorizationBtn)``;
