import * as SC from './UserMenu.styled';
import { Box } from 'components/Box';
import { useLogoutMutation } from 'redux/authApi';
import { logoutUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const UserMenu = ({ user, isOpen, toggleMenu, refUserMenu }) => {
  const initials = name => name[0].toUpperCase();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogoutUser = async e => {
    try {
      toggleMenu();
      await logout().unwrap();
      dispatch(logoutUser());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const clickOutsideModal = e => {
      const userMenu = refUserMenu.current;

      if (e.target.closest(`#userMenu`) === userMenu) return;
      console.log('лисенер есть');
      toggleMenu();
    };

    window.addEventListener('click', clickOutsideModal);
    return () => {
      window.removeEventListener('click', clickOutsideModal);
    };
  }, [refUserMenu, toggleMenu]);

  return (
    <SC.UserMenu isOpen={isOpen} ref={refUserMenu} id="userMenu">
      <Box display="flex" flexDirection="column" alignItems="center">
        <SC.AvatarBox>
          <p>{initials(user.name)}</p>
        </SC.AvatarBox>
        <SC.UserName>{user.name}</SC.UserName>
      </Box>
      <div>
        <SC.LogoutBtn type="button" onClick={handleLogoutUser}>
          Logout
        </SC.LogoutBtn>
      </div>
    </SC.UserMenu>
  );
};
