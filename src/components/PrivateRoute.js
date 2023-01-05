import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentUserQuery } from 'redux/authApi';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoading: isRefreshing } = useCurrentUserQuery();
  const isLoggedIn = useSelector(state => state.auth.isLogin);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
