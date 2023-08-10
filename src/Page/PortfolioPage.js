import React from 'react'
import './PortfolioPage.css'
import Me from '../assets/image.jpg'
import About from '../components/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function PortfolioPage() {
  return (
    <div className='portfolio-page'>
      <div className='main'>
        <div className='introduction' id='introduction'>
            <div className='introduction-container'>
                <div className='introduction-text'>
                    <div className='introduction-text-1'>
                        <h2> I'm Wisdom woke </h2>
                        <br/>
                        <p> a Full-Stack Developer</p>
                    </div>
                    <p className='introduction-text-2'>An ever learning, front-end developer that builds scaleable web applications with modern technologies </p>
                    <div className='contact-btn'>
                      <a href='https://docs.google.com/document/d/1gl02NjzR1kxvUgrihxTkCVFzWi121_XBVyQFiaInxeM/edit?usp=sharing' target='_blank' rel="noreferrer">
                        <button className='btn'>Resume</button>
                      </a>
                    </div>
                </div>
                <div className='Introduction-image'>
                    <div className='i-img'>
                        <img src={Me} alt='text'/>
                    </div>
                </div>
            </div>
        </div>
      <div className='about-container' id='about'>
        <About/>
      </div>
      <div className='project-container' id='project'>
        <Projects/>
      </div>
      <div className='contact-container' id='contact'>
        <Contact/>
      </div>
      </div>
      <div className='footer-container'>
        <Footer/>
      </div>
    </div>
  )
}
