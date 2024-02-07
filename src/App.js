import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';



const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Login />
    </div>
  )
}

export default App