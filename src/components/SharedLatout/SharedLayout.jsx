import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Nav, UnstableNav } from './SharedLauout.Styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/userMenu/UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home </NavLink>

          <UnstableNav>
            {isLoggedIn ? (
              <>
                <NavLink to="contacts">contacts</NavLink>
                <UserMenu />
              </>
            ) : (
              <>
                <NavLink to="register">register </NavLink>
                <NavLink to="login">login</NavLink>
              </>
            )}
          </UnstableNav>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </>
  );
};
