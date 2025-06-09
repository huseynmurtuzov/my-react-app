"use client"


import { useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleClick = (e) => {
    e.preventDefault()
    if(email == "isci@gmail.com"){
        if(localStorage.getItem("role")){
            localStorage.removeItem("role")
        }
        localStorage.setItem("role","isci")
        window.location.href="/stores"
    }else if(email == "mudur@gmail.com"){
        
        localStorage.setItem("role","mudur")
        window.location.href="/stores"
    }else{
        if(localStorage.getItem("role")){
            localStorage.removeItem("role")
        }
        alert("Yalnış mail və ya password daxil etdiniz!")
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Login</h1>
            <p className="login-subtitle">Hesabınıza girin</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kontakthome@email.com"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Şifrə
              </label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrənizi yazın"
                  className="input-field"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                  {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button" onClick={handleClick}>
              Login
            </button>
          </form>

          {/* <div className="login-footer">
            <a href="#" className="forgot-link">
              Şifremi Unuttum
            </a>
          </div> */}
        </div>
      </div>

      
    </>
  )
}
