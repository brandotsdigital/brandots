"use client"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim()) return
    const userMsg = { sender: "user", text: input }
    setMessages((msgs) => [...msgs, userMsg])
    setInput("")
    setLoading(true)
    try {
      // Call your Next.js API route that proxies to Scale AI Inference
      const res = await fetch("/api/scale-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      setMessages((msgs) => [...msgs, { sender: "bot", text: data.reply || "Sorry, I couldn't get a response." }])
    } catch {
      setMessages((msgs) => [...msgs, { sender: "bot", text: "Sorry, something went wrong." }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Chatbot"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="currentColor" opacity=".2"/><path d="M7 10h10M7 14h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-orange-500 text-white px-4 py-3 font-bold flex items-center justify-between">
            <span>Brandots AI Chat</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-orange-200 text-xl font-bold">×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-80 text-sm space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-xl px-3 py-2 max-w-[80%] ${msg.sender === "user" ? "bg-orange-100 text-orange-900" : "bg-white text-gray-900 border"}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex items-center border-t border-gray-200 bg-white p-2 gap-2">
            <input
              type="text"
              className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <Button type="submit" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white" disabled={loading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
