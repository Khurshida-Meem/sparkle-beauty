import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SingleProductDetail from './Pages/Shared/SingleProduct/SingleProductDetail';
import SignIn from './Pages/SignIn/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignIn/SignUp/SignUp';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <Route path='/sign_in'>
              <SignIn></SignIn>
            </Route>
            <Route path='/sign_up'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/product/:productId'>
              <SingleProductDetail></SingleProductDetail>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
