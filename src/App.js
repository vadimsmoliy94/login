import React, { useState, useEffect } from 'react';
import './App.css';
import Log from './Log';
import LogOut from './LogOut';

function App() {

  let [userName, setUserName] = useState(null);
  let [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2.init({
        client_id: '642766108929-c2r4l05guq5qlf153lb29pj7ce11vs6e.apps.googleusercontent.com'
      }).then(() => console.log('ok'), () => console.log('error'))
    })
  }, []);

  function log() {

    function userOk(user) {
      console.log('ok user');
      setUserName(user.getBasicProfile().getName());
      setUserEmail(user.getBasicProfile().getEmail())
    }

    function userError(user) {
      console.log('user error');
    }
    console.log('work');
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn(
      {
        scope: 'profile email'
      }
    ).then(userOk, userError)
  }

  function logOut() {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(() => console.log('user Out'), () => console.log('error user out'));
    setUserName(null);
    setUserEmail(null);
  }

  return (
    <div className="App">
      {!userName ? <Log log={log} /> : <LogOut name={userName} email={userEmail} logOut={logOut} />}
    </div>
  );
}

export default App;
