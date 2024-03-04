
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Slider from './components/slider'
import Rooms from './components/rooms';
import RoomDetail from './pages/room-detail';
import { BrowserRouter , Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/not-found';
import Contact from './pages/contact';
import AboutUs from './pages/about-us';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Header className="header" />
        <div className="main-content">
          <Slider />
              <Switch>  
              <Route exact path="/" component={Rooms} />
              <Route path="/roomdetail/:id" component={RoomDetail} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={AboutUs} />
              <Route component={NotFound} />
              </Switch>
        </div>
        <Footer className="footer" />
      </div>
    
  </BrowserRouter>
  );
}

export default App;
