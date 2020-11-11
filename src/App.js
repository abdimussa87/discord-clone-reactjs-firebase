import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';
import { useDispatch } from 'react-redux'
import { login, logout } from './features/userSlice';
import { auth } from './firebase'
function App() {

  // * allows us to shoot into our data layer
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          photo: user.photoURL,
          email: user.email,
          displayName: user.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);


  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ?
        <>
          <Sidebar />
          <Chat />
        </>
        :
        <Login />
      }
    </div>
  );
}

export default App;
