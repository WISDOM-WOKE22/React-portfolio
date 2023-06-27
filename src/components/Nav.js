// style
import './Nav.css'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function Nav() {
   const [ showMobileNav, setShowMobileNav ] = useState(false) 

   const showNavBar = () => {
    showMobileNav ? setShowMobileNav(false) : setShowMobileNav(true)
   }

    return(
        <div className="Nav">
            <div className='Nav-container'>
            <div className='logo'>
                <div className='logo-txt'>
                    wisdom woke
                </div>
            </div>
            <div className='nav-list'>
                <ul>
                    <li className='list'>
                        <a href='#about'>
                         Aboute Me
                        </a>
                    </li>
                    <li className='list'>
                        <a href='#project'>
                         Projects
                        </a>
                    </li>
                    {/* <li className='list'>
                        <a href='#project'>
                         Blog
                        </a>
                    </li> */}
                    <li className='list'>
                        <a href='#contact'>
                         Contact Me
                        </a>
                    </li>
                    <li className='list'>
                        <a href='https://github.com/WISDOM-WOKE22' rel="noreferrer"
                        target='_blank'>
                         Github
                        </a>
                    </li>
                </ul>
            </div>
            <div className='mobile-menubar'>
                <FaBars
                 onClick={() => showNavBar()}
                 />
            </div>
          {showMobileNav && (<div className='mobile-menu'>
               <ul>
                 <li>
                    <a href='#about'>
                     About me
                    </a>
                    </li>
                 <li>
                    <a href='#project'>
                     Projects
                    </a>
                    </li>
                 <li>
                    <a href='#project'>
                     Blog
                    </a>
                    </li>
                 <li>
                    <a href='#contact'>
                     Contact Me
                    </a>
                   </li>
                 <li>
                    <a href='https://github.com/WISDOM-WOKE22' 
                    target='_blank' rel="noreferrer">

                    Github
                    </a>
                    </li>
               </ul>
            </div>)}
            </div>
        </div>
    )
}