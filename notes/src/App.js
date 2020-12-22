/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Signin from './dashboard/userSignin';
import Home from './dashboard/home';
import Note from './dashboard/note';
import ManageNotes from './dashboard/manageNotes';
import Register from './dashboard/userRegister';
import SideBar from './components/sidebar'
import { logout } from './actions/userActions';
import { useSelector , useDispatch} from 'react-redux';
import { Button } from 'semantic-ui-react';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin; 

  const dispatch = useDispatch();

  const handleLogout = (props) => {
    dispatch(logout());
    <Link to="/"></Link>
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
        <div className="brand">
          <Link to="/">Notes</Link>
          </div>
          <div className="header-links">
          {userInfo ? ( <div>
            <div>
              <Link to="/profile">{userInfo.userName}</Link></div>
              <div style={{marginLeft:"15px"}}>
                <Button type="button" onClick={handleLogout}>Logout</Button>
              </div>
            </div>) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main className="main">
          <SideBar/>
          <div className="content">
            <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/notes"  component={Note} />
            <Route path="/managenotes"  component={ManageNotes} />
            </Switch>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
