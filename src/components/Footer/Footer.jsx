import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaReddit } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-text'>
            Built for the love and criuse
        </div>
        <div className='footer-link'>
           <a href='https://twitter.com/WISDOMWOKE1'
            className='link'
             target='_blank'>
              <FaTwitter className='footer-icon'/> 
           </a>
           <a href='https://www.linkedin.com/in/wisdom-woke-703488237/' className='link'
           target='_blank'>
            <FaLinkedin className='footer-icon'/>
           </a>
           <a href='#'>
             <FaReddit className='footer-icon'/>
           </a>
        </div>
      </div>
    </div>
  )
}
