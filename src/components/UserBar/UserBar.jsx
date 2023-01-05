import { useNavigate } from 'react-router-dom';
import * as SC from './UserBar.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useState } from 'react';
import { useCurrentUserQuery } from 'redux/authApi';
import { useRef } from 'react';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useSelector(state => state.auth.isLogin);
  const user = useSelector(state => state.auth.user);
  const { isLoading } = useCurrentUserQuery();
  const navigate = useNavigate();
  const refUserMenu = useRef(null);

  const initials = name => name[0].toLocaleUpperCase();
  const closeModal = () => {
    setIsOpen(false);
    window.removeEventListener('click', handleKeyDown);
    console.log('remove');
  };

  const handleKeyDown = e => {
    const userMenu = refUserMenu.current;
    console.log('кликер есть');

    if (e.target.closest(`#${userMenu?.id}`) === userMenu) return;
    console.log('кликер есть');
    closeModal();
  };

  const toogleUserMenu = evt => {
    evt.preventDefault();
    evt.stopPropagation();

    !isOpen
      ? window.addEventListener('click', handleKeyDown)
      : window.removeEventListener('click', handleKeyDown);
    !isOpen ? console.log('add') : console.log('remove');
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
            <SC.UserInfoBox href="" onClick={toogleUserMenu}>
              <SC.UserInfo>
                <SC.UserAvatar>{initials(user.name)}</SC.UserAvatar>
                <SC.UserName>{user.name}</SC.UserName>
              </SC.UserInfo>
            </SC.UserInfoBox>
            <UserMenu
              isOpen={isOpen}
              user={user}
              closeModal={closeModal}
              refUserMenu={refUserMenu}
            />
          </>
        ))}
    </SC.Conatainer>
  );
};
