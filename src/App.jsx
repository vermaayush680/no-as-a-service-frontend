import { useState } from 'react'
import './App.css'

function App() {
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchReason = async () => {
    setLoading(true)
    setError('')
    
    try {
      // Use full backend URL in production, proxy in development
      const isProd = import.meta.env.PROD;
      const url = import.meta.env.VITE_API_URL;
      console.log('Calling API:', url);
      const response = await fetch(url)
      
      if (!response.ok) {
        // If the response is not ok, throw an error
        console.error('Error fetching reason:', response.statusText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setReason(data.reason)
    } catch (err) {
      setError(`Failed to fetch reason: ${err.message}`)
      console.error('Error fetching reason:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1 className="title">❌ No-as-a-Service</h1>
      
      <div className="card">
        <p>Get a random rejection reason from the No-as-a-Service API!</p>
        
        <button 
          className="get-reason-btn" 
          onClick={fetchReason}
          disabled={loading}
        >
          {loading ? 'Getting Reason...' : 'Get Random "No" Reason'}
        </button>

        {loading && (
          <div className="loading">
            <p>Fetching a creative way to say no...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {reason && !loading && (
          <div className="reason-text">
            "{reason}"
          </div>
        )}
      </div>
    <div className="footer" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem', color: '#888' }}>
        Created by Ayush Verma <span style={{ margin: '0 0.5rem' }}>|</span>
        <a href="https://github.com/vermaayush680" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
    </div>
    </div>
  )
}

export default App
