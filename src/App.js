import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to ="/">ํ๐ </Link>
        </li>
        <li>
          <Link to = "/about">์๊ฐ๐</Link>
        </li>
        <li>
          <Link to ="/profiles">ํ๋กํ๐ฉ</Link>
        </li>
        <li>
          <Link to ="/history">history ์์ ๐ฌ</Link>
        </li>
      </ul>
      <hr />
      <Switch>
      <Route path = "/" component = {Home} exact = {true} />
      <Route path = {["/about", "/info"]} component = {About} />
      <Route path = {['/profiles']} component={Profiles}/>
      <Route path = "/history" component={HistorySample}/>
      <Route render={({ location }) => (
        <div>
          <h2> โ์ด ํ์ด์ง๋ ์กด์ฌํ์ง ์์ต๋๋คโ </h2>
          <p>{location.pathname}</p>
        </div>
      )}
    />
    </Switch>
    </div>
  );
};

export default App;
