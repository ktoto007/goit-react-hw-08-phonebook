import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {
  const user = useSelector(selectUser);
  const name = user
    ? `${user.name}, welcome to your contact book`
    : "user, you can go to the login page if you already have an account or to the registration page if you don't have one and get access to the contact book";

  return (
    <p style={{ paddingLeft: 200, paddingRight: 200 }}>Hello Dear {name} </p>
  );
};

export default Home;
