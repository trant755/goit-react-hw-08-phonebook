import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { UserBar } from './UserBar/UserBar';
import { App } from './Phonebook.styled';

const SharedLayout = () => {
  return (
    <App>
      <Header />
      <UserBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </App>
  );
};

export default SharedLayout;
