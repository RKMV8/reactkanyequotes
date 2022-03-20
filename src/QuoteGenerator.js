import React from 'react'

async function fetchText() {
    let response = await fetch('https://api.kanye.rest');
    let data = await response.json();
    document.getElementById('actualText').innerHTML = "\""+data.quote+"\"";;
  }

  function QuoteGenerator(){
      return <div className="QuoteSection">
      <p id="actualText">Click the button below to generate a quote from Kanye!</p>
      <img src="https://svgshare.com/i/fLF.svg" alt="kanye"></img>
      <button onClick={fetchText}>Quote me! ⚡</button>
      </div>
  }

export default QuoteGenerator