import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

function App() {

  const [quote, setQuotes] = useState([])
  const iconStyle = { color: "#6497b5" }
  const newQuote = async () => {
    const random = Math.floor(Math.random() * 100)
    const res = await axios.get("https://type.fit/api/quotes")
    setQuotes(res.data[random])
  }

  useEffect(() => {
    newQuote()
  }, [])

  return (
    <>
      <div className='container'>
        <div className="box">
          {
            quote.author === null
              ? <p><FaQuoteLeft style={iconStyle} /> {quote.text} <FaQuoteRight style={iconStyle} /><br /><span>- Author Unknown</span></p>
              : <p><FaQuoteLeft style={iconStyle} /> {quote.text} <FaQuoteRight style={iconStyle} /><br /><span> - {quote.author}</span></p>
          }
          <div className="button">
            <button onClick={newQuote}>Generate Quote</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
