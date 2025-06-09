"use client"

import { MapPin, Phone, Clock, Star, Bell } from "lucide-react"
import Nav from "./Nav"

const stores = [
  {
    id: 1,
    name: "Kontakt Home Binə",
    address: "Xəzər r-nu, Binə qəs., Əli İsazadə küç., giriş 92",
    phone: "+90 216 555 0123",
    hours: "09:00 - 22:00",
    rating: 100,
    reviews: 128,
    distance: "2.3 km",
    image: "/placeholder.svg?height=120&width=200",
    status: "Açık",
    specialOffer: "Yeni Koleksiyon %30 İndirim",
  },
  {
    id: 2,
    name: "Kontakt Home 'Vurğun Residence'",
    address: "Nəsimi r-nu, S. Vurğun küç. 110 (Bakı Dövlət Sirkinin yanı)",
    phone: "+90 212 555 0456",
    hours: "10:00 - 23:00",
    rating: 90,
    reviews: 95,
    image: "/placeholder.svg?height=120&width=200",
    status: "Açık",
  },
  {
    id: 3,
    name: "Kontakt Home 'Dəniz Mall'",
    address: "Səbail r-nu, Neftçilər pr. 26 A, Dəniz Mall (4-cü mərtəbə)",
    phone: "+90 216 555 0789",
    hours: "10:00 - 22:00",
    rating: 80,
    reviews: 203,
    image: "/placeholder.svg?height=120&width=200",
    status: "Kapalı",
  },
  {
    id: 4,
    name: "Kontakt Home 'Gənclik Mall'",
    address: "Nərimanov r-nu, F. X. Xoyski pr., Gənclik Mall (-1-ci mərtəbə)",
    phone: "+90 212 555 0321",
    hours: "10:00 - 22:00",
    rating: 50,
    reviews: 156,
    image: "/placeholder.svg?height=120&width=200",
    status: "Açık",
  },
  {
    id: 5,
    name: "Kontakt Home 'Masazır'",
    address: "Abşeron r-nu, Masazır k., Əliağa Vahid küç. 145 (Tamstore-un yaxınlığı)",
    phone: "+90 212 555 0321",
    hours: "10:00 - 22:00",
    rating: 95,
    reviews: 156,
    image: "/placeholder.svg?height=120&width=200",
    status: "Açık",
  },
  {
    id: 6,
    name: "Kontakt Home 'Elmlər Akademiyası'",
    address: "Yasamal r-nu, B. Vahabzadə küç., (Bakı Dövlət Universitetinin yanı)",
    phone: "+90 212 555 0321",
    hours: "10:00 - 22:00",
    rating: 4.4,
    reviews: 156,
    image: "/placeholder.svg?height=120&width=200",
    status: "Açık",
  },
]

const role = localStorage.getItem("role")
export default function Stores() {
  return (
    <>
      <Nav/>
      <div className="mobile-container">
        <div className="header">
          <h1 className="title">Kontakt Home Mağazaları</h1>
        </div>

        <div className="stores-list">
          {stores.map((store) => (
            <div key={store.id} className="store-card">
              <div className="store-image-container">
                <img src="https://upload.wikimedia.org/wikipedia/az/5/55/Kontakt_Home.jpg" alt={store.name} className="store-image" />
                
              </div>

              <div className="store-content">
                <div className="store-header">
                  <h3 className="store-name">{store.name}</h3>
                </div>

                <div className="rating-container">
                  <div className="rating">
                    <Star className="star-icon" />
                    <span className="rating-text">{store.rating} xal</span>
                    <span className="reviews-text">({store.reviews})</span>
                  </div>
                </div>

                {/* <div className="store-details">
                  <div className="detail-item">
                    <MapPin className="detail-icon" />
                    <span className="detail-text">{store.address}</span>
                  </div>

                  <div className="detail-item">
                    <Phone className="detail-icon" />
                    <span className="detail-text">{store.phone}</span>
                  </div>

                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span className="detail-text">{store.hours}</span>
                  </div>
                </div> */}

                {role == "isci" && (<div className="notifications-section">
                  <button className="notifications-button" onClick={() => {window.location.href = `/add-notification/${store.id}`}}>
                    <Bell className="bell-icon" />
                    Bildirişlər Əlavə Et
                  </button>
                </div>)}
                
                {role == "mudur" && (<div className="notifications-section">
                  <button className="notifications-button" onClick={() => {window.location.href = `/notifications/${store.id}`}}>
                    <Bell className="bell-icon" />
                    Bildirişləri Gör
                  </button>
                </div>)}
              </div>
            </div>
          ))}
        </div>

        
      </div>

    </>
  )
}
