import './Projectbox.css'
import { FaCheck, FaGithub } from 'react-icons/fa'
import ZuesExchange from '../../../assets/Zues-exchange.jpg'
import Portfolio1 from '../../../assets/Portfolio1.jpg'
import Portfolio2 from '../../../assets/Portfolio2.jpg'
import ShellNote from '../../../assets/Shell-Note.jpg'
import AlignNfts from '../../../assets/AlignNfts.jpg'


export default function Projectbox() {
  return (
    <div className='project-box-container'>
        <div className='project-box1'>
        <div className='project-name1'>Zues Exchange</div>
        <div className='project-image'>
            <img src={ZuesExchange}/>
        </div>
        <div className='project-tech'>
            <div className='project-name2'>Zues Exchange</div>
            <div className='about-project'>
                Zues exchange is a crypto investment broker front-end with fun feature of a real-time functionalities
            </div>
            <ul>
                <li><FaCheck className='abt-icon'/>React js</li>
                <li><FaCheck className='abt-icon'/>HTML and CSS</li>
                <li><FaCheck className='abt-icon'/>Firebase</li>
                <li><FaCheck className='abt-icon'/>Axios</li>
                <li><FaCheck className='abt-icon'/>CoinGecko API</li>
            </ul>
            <div className='links'>
                <a href='##' target='_blank' className='link'>Github <FaGithub className='github-icon'/></a>
                <a href="##" target='_blank' className='demo-btn'>Live demo</a>
            </div>
        </div>
        </div>
        <div className='project-box2'>
        <div className='project-name1'>Shell Note</div>
        <div className='project-image'>
            <img src={ShellNote}/>
        </div>
        <div className='project-tech'>
            <div className='project-name2'>Shell Note</div>
            <div className='about-project'>
               Shell note is a simple web application that can be used to save note and set task 
            </div>
            <ul>
                <li><FaCheck className='abt-icon'/>React js</li>
                <li><FaCheck className='abt-icon'/>HTML and CSS</li>
                <li><FaCheck className='abt-icon'/>Firebase</li>
            </ul>
            <div className='links'>
                <a href='https://github.com/WISDOM-WOKE22/Shell-note'  target='_blank' className='link'>Github<FaGithub className='github-icon'/></a>
                <a href="https://shell-note.web.app/" target='_blank' className='demo-btn'>Live demo</a>
            </div>
        </div>
        </div>
        <div className='project-box1'>
        <div className='project-name1'>Portfolio</div>
        <div className='project-image'>
            <img src={Portfolio2}/>
        </div>
        <div className='project-tech'>
            <div className='project-name2'>Portfolio</div>
            <div className='about-project'>
               Shell note is a simple web application that can be used to save note and set task 
            </div>
            <ul>
                <li><FaCheck className='abt-icon'/>React js</li>
                <li><FaCheck className='abt-icon'/>HTML and CSS</li>
            </ul>
            <div className='links'>
                <a href='##' target='_blank' className='link'>Github<FaGithub className='github-icon'/></a>
                <a className='demo-btn'>Live demo</a>
            </div>
        </div>
        </div>
        <div className='project-box2'>
        <div className='project-name1'>Align Nfts</div>
        <div className='project-image'>
            <img src={AlignNfts}/>
        </div>
        <div className='project-tech'>
            <div className='project-name2'>Align Nfts</div>
            <div className='about-project'>
                Align Nfts is a landing page for Nft site
            </div>
            <ul>
                <li><FaCheck className='abt-icon'/>JavaScript</li>
                <li><FaCheck className='abt-icon'/>HTML and CSS</li>
            </ul>
            <div className='links'>
                <a href='https://github.com/WISDOM-WOKE22/AlignNFTs' target='_blank' className='link'>Github<FaGithub className='github-icon'/></a>
                <a href='https://alignnfts.netlify.app/' target='_blank' className='demo-btn'>Live demo</a>
            </div>
        </div>
        </div>
        <div className='project-box1'>
        <div className='project-name1'>Portfolio</div>
        <div className='project-image'>
            <img src={Portfolio1}/>
        </div>
        <div className='project-tech'>
            <div className='project-name2'>Portfolio</div>
            <div className='about-project'>
                this was my first portfolio
            </div>
            <ul>
                <li><FaCheck className='abt-icon'/>JavaScript</li>
                <li><FaCheck className='abt-icon'/>HTML and CSS</li>
            </ul>
            <div className='links'>
            <a href='https://github.com/WISDOM-WOKE22/portfolio' target='_blank' className='link'>Github<FaGithub className='github-icon'/></a>
                <a href='https://wisdom-woke-portfolio.netlify.app/' target='_blank' className='demo-btn'>Live demo</a>
            </div>
        </div>
        </div>
    </div>
  )
}
