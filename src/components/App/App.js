import React from 'react';
import style from './App.module.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import Profile from '../Profile';
import Dialog from '../Dialog';
import {Route, BrowserRouter} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={style.Display}>
          <Navigation />
          <Route path="/Dialog" render={ () => <Dialog messagesData={props.messagesData} dialogsData={props.dialogsData} /> } />
          <Route path="/Profile" render={ () => <Profile posts={props.posts}/> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;