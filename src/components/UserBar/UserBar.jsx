import { useNavigate } from 'react-router-dom';
import * as SC from './UserBar.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useState } from 'react';
import { useCurrentUserQuery } from 'redux/authApi';
import { useRef } from 'react';
import { UserMenuBox } from 'components/UserMenu/UserMenu.styled';
import { CSSTransition } from 'react-transition-group';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useSelector(state => state.auth.isLogin);
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  const { isLoading } = useCurrentUserQuery(null, { skip: !token });
  const navigate = useNavigate();
  const refUserMenu = useRef(null);

  const initials = name => name[0].toLocaleUpperCase();

  const toggleUserMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SC.Conatainer>
      {!isLoading &&
        (!isLogin ? (
          <SC.AuthorizationBtnsBox>
            <SC.AuthorizationBtn
              type="button"
              onClick={() => navigate('/login')}
            >
              Login in
            </SC.AuthorizationBtn>
            <SC.AuthorizationBtn
              type="button"
              onClick={() => navigate('/registration')}
            >
              Sign up
            </SC.AuthorizationBtn>
          </SC.AuthorizationBtnsBox>
        ) : (
          <>
            <SC.UserInfoBox
              href=""
              onClick={evt => {
                evt.preventDefault();
                evt.stopPropagation();
                toggleUserMenu();
              }}
            >
              <SC.UserInfo>
                <SC.UserAvatar>{initials(user.name)}</SC.UserAvatar>
                <SC.UserName>{user.name}</SC.UserName>
              </SC.UserInfo>
            </SC.UserInfoBox>
            <UserMenuBox isOpen={isOpen}>
              <CSSTransition
                nodeRef={refUserMenu}
                in={isOpen}
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <UserMenu
                  isOpen={isOpen}
                  user={user}
                  toggleMenu={toggleUserMenu}
                  refUserMenu={refUserMenu}
                />
              </CSSTransition>
            </UserMenuBox>
          </>
        ))}
    </SC.Conatainer>
  );
};
