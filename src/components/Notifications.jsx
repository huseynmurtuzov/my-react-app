"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Clock, User, FileText, Download, Eye } from "lucide-react"
import Nav from "./Nav"
import notification from '../assets/data.json'



export default function Notification() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }
  const existing = JSON.parse(localStorage.getItem("notifications") || "[]");
  const notifications = existing.concat(notification)
  console.log(notifications)
  console.log(existing)
  const getStatusColor = (status) => {
    switch (status) {
      case "Yeni":
        return "#dc2626"
      case "İncələnir":
        return "#f59e0b"
      case "Həll olundu":
        return "#10b981"
      default:
        return "#6b7280"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Yüksek":
        return "#dc2626"
      case "Orta":
        return "#f59e0b"
      case "Düşük":
        return "#10b981"
      default:
        return "#6b7280"
    }
  }

  return (
    <>
    <Nav/>
      <div className="manager-container">
        <div className="manager-header">
          <h1 className="manager-title">Bildirimlər</h1>
          <p className="manager-subtitle">Mağaza bildirimlərini idarə edin</p>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-card">
              <div className="notification-header" onClick={() => toggleCard(notification.id)}>
                <div className="notification-main">
                  <div className="notification-top">
                    <span className="notification-type">{notification.type}</span>
                    <div className="notification-badges">
                      <span className="status-badge" style={{ backgroundColor: getStatusColor(notification.status) }}>
                        {notification.status}
                      </span>
                      <span
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(notification.priority) }}
                      >
                        {notification.priority}
                      </span>
                    </div>
                  </div>
                  <h3 className="notification-title">{notification.title}</h3>
                  <div className="notification-meta">
                    <div className="meta-item">
                      <User className="meta-icon" />
                      <span>
                        {notification.sender} - {notification.store}
                      </span>
                    </div>
                    <div className="meta-item">
                      <Clock className="meta-icon" />
                      <span>
                        {notification.date} {notification.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="expand-button">
                  {expandedCard === notification.id ? (
                    <ChevronUp className="expand-icon" />
                  ) : (
                    <ChevronDown className="expand-icon" />
                  )}
                </div>
              </div>

              {expandedCard === notification.id && (
                <div className="notification-details">
                  <div className="details-section">
                    <h4 className="details-title">Açıqlama</h4>
                    <p className="details-text">{notification.description}</p>
                  </div>

                  {notification.files.length > 0 && (
                    <div className="details-section">
                      <h4 className="details-title">Əlavə edilmiş fayllar</h4>
                      <div className="files-list">
                        {notification.files.map((file, index) => (
                          <div key={index} className="file-item">
                            <div className="file-info">
                              <FileText className="file-icon" />
                              <span className="file-name">{file}</span>
                            </div>
                            <div className="file-actions">
                              <button className="file-action-button">
                                <Eye className="action-icon" />
                              </button>
                              <button className="file-action-button">
                                <Download className="action-icon" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* <div className="notification-actions">
                    <button className="action-button primary">Yanıtla</button>
                    <button className="action-button secondary">Durumu Güncelle</button>
                  </div> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


    </>
  )
}
