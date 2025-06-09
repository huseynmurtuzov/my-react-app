"use client"


import { useState } from "react"
import { useParams } from "react-router-dom"
import { ChevronDown, Upload, X, AlertCircle, FileText, Camera } from "lucide-react"

const notificationTypes = [
  { id: 1, label: "Texniki Problem", value: "texniki-problem" },
  { id: 2, label: "İşçi problemi", value: "işçi-problemi" },
  { id: 3, label: "Anbar Problemi", value: "anbar-problemi" },
  { id: 4, label: "Müştəri Şikayeti", value: "mustəri-sikayeti" },
  { id: 5, label: "Güvənlik Problemi", value: "guvenlik-problemi" },
  { id: 6, label: "Təmizlik Problemi", value: "təmizlik-problemi" },
  { id: 9, label: "Diğer", value: "diger" },
]

export default function AddNotification() {
  const {id} = useParams()
  const [selectedType, setSelectedType] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [notes, setNotes] = useState("")
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }
  const randomId = Math.floor(Math.random() * 1000000);
  const newNotification = {
   
    files:[],
    id:randomId,
    description:notes,
    status:"vacib",
    type:"bildiriş",
    priority:"güclü",
    title:"Bildiriş",
    sender:"Isci",
    store:"Kontakt home bine",
    date:"2025/9/6",
    time:"13:25",
    type:selectedType
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem("notifications") || "[]");
  // Yenisini əlavə et
    existing.push(newNotification);
    // Yenidən yadda saxla
    localStorage.setItem("notifications", JSON.stringify(existing));

    // Reset form
    setSelectedType("")
    setNotes("")
    setFiles([])
    alert("Bildirim başarıyla gönderildi!")
  }

  const selectedTypeLabel =
    notificationTypes.find((type) => type.value === selectedType)?.label || "Bildirim növünü seçin"

  return (
    <>
      <div className="notification-container">
        <div className="notification-card">
          <div className="notification-header">
            <AlertCircle className="header-icon" />
            <div>
              <h1 className="notification-title">Yeni Bildirim</h1>
            </div>
          </div>

          <form  className="notification-form">
            <div className="form-group">
              <label className="form-label">Bildirim Növü *</label>
              <div className="dropdown-container">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`dropdown-button ${selectedType ? "selected" : ""}`}
                >
                  <span className="dropdown-text">{selectedTypeLabel}</span>
                  <ChevronDown className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {notificationTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setSelectedType(type.value)
                          setIsDropdownOpen(false)
                        }}
                        className={`dropdown-item ${selectedType === type.value ? "active" : ""}`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="form-label">
                Əlavə Açıqlama
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Detaylı açıqlama yazın..."
                className="textarea-field"
                rows={4}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Fayl Əlavə Et</label>
              <div className="file-upload-container">
                <input
                  type="file"
                  id="file-input"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <label htmlFor="file-input" className="file-upload-button">
                  <Upload className="upload-icon" />
                  <span>Fayl Seç</span>
                </label>
              </div>

              {files.length > 0 && (
                <div className="file-list">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      <div className="file-info">
                        {file.type.startsWith("image/") ? (
                          <Camera className="file-icon" />
                        ) : (
                          <FileText className="file-icon" />
                        )}
                        <span className="file-name">{file.name}</span>
                      </div>
                      <button type="button" onClick={() => removeFile(index)} className="remove-file-button">
                        <X className="remove-icon" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit" disabled={!selectedType} className="submit-button" onClick={handleSubmit}>
              Bildirimi Göndər
            </button>
          </form>
        </div>
      </div>

      
    </>
  )
}
