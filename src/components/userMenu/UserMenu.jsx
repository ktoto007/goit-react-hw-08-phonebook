import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { selectUser } from 'redux/auth/authSelectors';
import { Container } from './UserMenu.styled';
export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <p>{email}</p>
      <button type="button" onClick={handleClick} className="button">
        Logout
      </button>
    </Container>
  );
};
