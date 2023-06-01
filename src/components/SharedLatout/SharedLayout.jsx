import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Nav, BaseNav, UnstableNav } from './SharedLauout.Styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/userMenu/UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Nav>
          <BaseNav>
            <NavLink to="/">Home </NavLink>
          </BaseNav>
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
        <Outlet></Outlet>
      </main>
    </>
  );
};
