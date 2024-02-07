import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [formError, setFormError] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSignIn = () => {
    // eslint-disable-next-line
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      setFormError('Invalid Email Adress')
      return
    }
    if (formValues.password.length < 8) {
      setFormError('Password should have atleast 8 characters')
      return
    }
    setFormError(null)
    navigate('/upload')
  }
  return (
    <div style={{ display: "flex", height: "100vh", background:"#F8FAFF" }} >

      <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "50%", background: "#605BFF" }}>
        <img src='/companyLogo.svg' width={"80px"} height={"80px"} style={{ margin: "5% 0 0 5%" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h1 style={{ color: 'white', fontFamily: "Montserrat", textAlign: "center" }}>BASE</h1>
        </div>

        <div style={{ width: "50%", display: "flex", justifyContent: "space-between", margin: "0% 0% 5% 25%" }}>
          <img src="/gitHub.svg" alt="GitHub" />
          <img src="/twitter.svg" alt="Twitter" />
          <img src="/linkedin.svg" alt="LinkedIn" />
          <img src="/discord.svg" alt="Discord" />
        </div>
      </div>

      <div style={{ height: "100%", width: "50%", marginTop: "5%", marginLeft: "8%" }} >
        <div >
          <h2 >Sign In </h2>
          <p > Sign in to your account </p>
        </div>

        <div style={{ display: "flex", gap: "5%", fontSize: "16px" }}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              navigate('/upload')
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          <div style={{ display: "flex", gap: "2%", width:"30%", height:"32px", background:"white" }} >
            <img src="/apple.svg" />
            <p style={{color:"grey", marginTop:"0%"}} >
              Sign in with Apple
            </p>
          </div>
        </div>

        <div style={{background:"white", width:"50%", marginTop:"5%", borderRadius:"5%", padding:"3% 3% 3% 3%"}} >
          <div style={{display:"flex", flexDirection:"column"}} >
            <label htmlFor="email" >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formValues.email}
              style={{width:"100%", background:"#F5F5F5", border:"none", borderRadius:"5%", height:"40px"}}
            />
          </div>
          <div>
            <label htmlFor="password" >
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
              value={formValues.password}
              style={{width:"100%", background:"#F5F5F5", border:"none", borderRadius:"5%", height:"40px"}}
            />
          </div>
          {formError && (
            <p >{formError}</p>
          )}
          <p style={{color:"blue"}}>
            Forgot password?
          </p>
          <button
            onClick={handleSignIn}
            style={{width:"100%", background:"#605BFF", border:"none", borderRadius:"10%", height:"40px", color:"white", fontWeight:600}}
          >
            Sign In
          </button>
        </div>

        <div style={{marginLeft:"10%"}}>
          <p style={{color:"grey", fontSize:"14px"}} >
            Don’t have an account?{' '}
            <span style={{color:"blue", fontSize:"14px"}}>
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login