import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentUserQuery } from 'redux/authApi';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(state => state.auth.token);
  const { isLoading: isRefreshing } = useCurrentUserQuery(null, {
    skip: !token,
  });
  const isLoggedIn = useSelector(state => state.auth.isLogin);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
