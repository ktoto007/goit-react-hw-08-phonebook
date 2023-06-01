import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
