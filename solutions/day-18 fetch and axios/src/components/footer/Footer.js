// src/components/footer/Footer.js
import React from 'react'

const Footer = ({ date }) => {
  console.log(date)
  return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
  )
}

export default Footer