import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  //   /et
  return (
    <div className='homepage'>
      <h1>Hello {location.state.id}, and welcome to the Home Page.</h1>
    </div>
  );
};

export default Home;
