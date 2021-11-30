import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Header from './components/shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Login/Register/Register';
import About from './components/About/About';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Footer from './components/shared/Footer/Footer';
import SinglePackage from './components/OrderManagement/SinglePackage/SinglePackage';
import ManageAllOrder from './components/MangeAllOrder/ManageAllOrder';
import NotFound from './components/NotFound/NotFound';
import AddANewPackage from './components/AddANewPackage/AddANewPackage';
import MyOrders from './components/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path='/packages/:id'>
              <SinglePackage></SinglePackage>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/manageAllOrder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/addANewPackage'>
              <AddANewPackage></AddANewPackage>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
