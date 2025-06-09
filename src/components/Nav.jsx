"use client"

import { useState } from "react"
import { Menu, X, Home, User, Settings, Bell, Heart, ShoppingBag, HelpCircle, LogOut } from "lucide-react"

export default function Nav() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen)
  }

  const menuItems = [
    { icon: Home, label: "Əsas Səhifə", href: "/stores" },
    // { icon: User, label: "Profil", href: "#" },
    // { icon: ShoppingBag, label: "Siparişlerim", href: "#" },
    // { icon: Bell, label: "Bildirimler", href: "#", badge: "3" },
    // { icon: LogOut, label: "Hesabdan Çıx", href: "#" },
  ]
  const logout = () => {
    localStorage.removeItem("role");
    window.location.href="/login"
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <div className="logo-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fyIs0De8dqPhtPGGJEKxYWYFd9E81k9L_A&s" alt="" className="logo-img" onClick={() => window.location.href="/stores"}/>
            </div>
          </div>

          <button onClick={toggleOffcanvas} className="menu-button">
            <Menu className="menu-icon" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOffcanvasOpen && <div className="overlay" onClick={toggleOffcanvas}></div>}

      {/* Offcanvas */}
      <div className={`offcanvas ${isOffcanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h2 className="offcanvas-title">Menu</h2>
          <button onClick={toggleOffcanvas} className="close-button">
            <X className="close-icon" />
          </button>
        </div>

        <div className="offcanvas-content">
          <div className="user-info">
            <div className="user-avatar">
              <User className="avatar-icon" />
            </div>
            <div className="user-details">
              <h3 className="user-name">User Name</h3>
              <p className="user-email">username@email.com</p>
            </div>
          </div>

          <div className="menu-list">
            {menuItems.map((item, index) => (
              <a key={index} href={item.href} className="menu-item">
                <item.icon className="menu-item-icon" />
                <span className="menu-item-text">{item.label}</span>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </a>
            ))}
            <a className="menu-item" onClick={logout}>
                <LogOut className="menu-item-icon" />
                <span className="menu-item-text">Hesabdan Çıx</span>
              </a>
          </div>
        </div>
      </div>

    </>
  )
}
