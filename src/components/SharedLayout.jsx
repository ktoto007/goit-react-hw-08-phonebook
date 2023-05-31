import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="register">register </NavLink>
          <NavLink to="login">login</NavLink>
          <NavLink to="contacts">contacts</NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
