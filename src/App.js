import { Container } from 'react-bootstrap';
import ProfileNavBar from './components/ProfileNavBar/profileNavBar';
import ProfileBanner from './components/ProfileBanner/profileBanner';
import ProfileContainer from './components/ProfileContainer/profileContainer';
import ProfileFooter from './components/ProfileFooter/profileFooter';
import './App.css';

function App() {
  return (
    <Container id='appContainer'>
      <ProfileNavBar />
      <ProfileBanner />
      <ProfileContainer />
      <ProfileFooter />
    </Container>
  )
}

export default App;