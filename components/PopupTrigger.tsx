"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Popup from "@/components/ui/popup"

interface PopupTriggerProps {
  triggerText?: string
  popupType?: "contact" | "testimonial" | "custom"
  title?: string
  children?: React.ReactNode
  className?: string
}

export default function PopupTrigger({
  triggerText = "Open Popup",
  popupType = "contact",
  title,
  children,
  className = "",
}: PopupTriggerProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsPopupOpen(true)}
        className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
      >
        <span className="relative z-10">{triggerText}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} type={popupType} title={title}>
        {children}
      </Popup>
    </>
  )
}
