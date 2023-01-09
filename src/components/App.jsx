import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import AddContact from 'pages/AddContact';
import NotFound from 'pages/NotFound';
import { useCurrentUserQuery } from 'redux/authApi';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';

export const App = () => {
  const token = useSelector(state => state.auth.token);
  useCurrentUserQuery(null, { skip: !token });

  return (
    <Box p={5}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<PrivateRoute component={Home} redirectTo={'/login'} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} redirectTo="/" />}
          />
          <Route
            path="/registration"
            element={
              <RestrictedRoute component={Registration} redirectTo="/" />
            }
          />
          <Route
            path="/add-contact"
            element={
              <PrivateRoute component={AddContact} redirectTo={'/login'} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};

// export const App = () => {

//   return (
//     <Box p={5}>
//       <SC.App>
//         <Header />
//         <UserBar />
//         {!isModalOpen && (
//           <Section title={'Contacts'}>
//             <Contacts />
//           </Section>
//         )}
//         {isModalOpen && (
//           <Section title={'Add Contact'}>
//             <ContactForm />
//           </Section>
//         )}
//       </SC.App>
//     </Box>
//   );
// };
