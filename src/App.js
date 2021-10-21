import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Home/Services/Services';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import About from './components/About/About';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
