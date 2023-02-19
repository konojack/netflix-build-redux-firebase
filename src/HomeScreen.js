import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
