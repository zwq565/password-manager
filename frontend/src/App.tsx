import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            🔐 Password Manager
          </h1>
          <p className="text-gray-300 mb-8">
            Secure password management built on Cloudflare
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
