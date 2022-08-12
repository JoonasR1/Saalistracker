import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { FirebaseAppProvider, AuthCheck} from 'reactfire';
import reportWebVitals from './reportWebVitals';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyBgWtArFesxXspDO0_Z1n7wzyRJhZOw_fM",
  authDomain: "kala-tracker.firebaseapp.com",
  projectId: "kala-tracker",
  storageBucket: "kala-tracker.appspot.com",
  messagingSenderId: "1037764678343",
  appId: "1:1037764678343:web:478ea939a8b2b98fb7e4e2",
  measurementId: "G-38B53KN4VK"
};

ReactDOM.render(
  <React.StrictMode>
     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
       <AuthCheck fallback={<Startup />}>
         <App />
        </AuthCheck> 
     </FirebaseAppProvider>
   </React.StrictMode>,
   document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
