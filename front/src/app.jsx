import './App.css';
import Detail from './components/detail/Detail';
import FollowList from './components/followList/FollowList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login/login';
import NewProfile from './components/profile/newProfile';
import MdProfile from './components/profile/mdProfile';
import Profile from './components/profile/profile';
import NavBar from './components/NavBar/NavBar.jsx';
import Withdraw from './components/Withdraw/Withdraw.jsx';
import Alarm from './components/Alarm/Alarm.jsx';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/mdProfile" component={MdProfile} />
          <Route exact path="/newProfile" component={NewProfile} />
          <Route exact path="/user/:id/followList" component={FollowList} />
          <Route exact path="/feed/:id/" component={Detail} />
          <Route exact path="/alarm" component={Alarm} />
          <Route exact path="/withdraw" component={Withdraw} />
          <Route exact path="/post" component={Post} />         
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
