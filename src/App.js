import React from 'react'
import Header from './Header'
import QuoteGenerator from './QuoteGenerator'



class App extends React.Component {
    render() {
      return (
        <div className="container">
          <Header />
          <QuoteGenerator />
        </div>
      )
    }
  }
  
export default App