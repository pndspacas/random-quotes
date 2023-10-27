import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

function App() {

  const [quote, setQuotes] = useState([])
  const iconStyle = { color: "#6497b5" }
  const newQuote = async () => {
    const random = Math.floor(Math.random() * 16) + 1
    const res = await axios.get("https://type.fit/api/quotes")
    const newQuoteData = res.data[random]
    setQuotes(newQuoteData)
    console.log(newQuoteData)
  }

  useEffect(() => {
    newQuote()
  }, [])


  return (
    <>
      <div className='container'>
        <div className="box">
          {
            quote && (
              quote.author === "type.fit"
                ? <p><FaQuoteLeft style={iconStyle} /> {quote.text} <FaQuoteRight style={iconStyle} /><br /><span>- Author Unknown</span></p>
                : <p><FaQuoteLeft style={iconStyle} /> {quote.text} <FaQuoteRight style={iconStyle} /><br /><span> - {quote.author.replace("type.fit", "").split(",")}</span></p>
            )
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
