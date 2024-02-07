import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Upload from './components/Upload';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="81744332140-mknmlmj457o5573ljvtvdbippajmk715.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
