import { useState } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const messages = [
    { sender: 'bot', text: '¡Hola! 👋 ¿Qué tipo de envase necesitas?' },
    { sender: 'user', text: 'Stand up pouch' },
    { sender: 'bot', text: 'Perfecto, ¿cuántas unidades?' }
  ]

  return (
    <div class="fixed bottom-4 right-4 z-50">
      <button onClick={() => setOpen(!open)} class="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition">
        💬
      </button>
      {open && (
        <div class="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl w-72 p-4">
          <div class="text-sm space-y-2 max-h-60 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} class={`p-2 rounded ${m.sender === 'bot' ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <input type="text" placeholder="Escribe aquí..." class="w-full mt-3 p-2 border rounded" />
        </div>
      )}
    </div>
  )
}