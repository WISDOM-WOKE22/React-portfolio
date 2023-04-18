import './About.css'
import { FaCheck } from 'react-icons/fa'

export default function About() {
  return (
    <div className='about'>
      <h2>About Me</h2>
      <p>An ever learning, front-end developer and a student currently in Rivers State University (RSU) Nigeria. I build website that are responsive and highly functional. I'm a creative developer with good communication skills, with a thing for building scalable application</p>
      <div className='sub'>
        <h3>Tech Skills</h3>
        <ul>
            <li><FaCheck className='abt-icon'/> HTML and CSS</li>
            <li> <FaCheck className='abt-icon'/> TypeScript</li>
            <li> <FaCheck className='abt-icon'/> JavaScript</li>
            <li> <FaCheck className='abt-icon'/> React JS</li>
            <li><FaCheck className='abt-icon'/> Node JS</li>
            <li><FaCheck className='abt-icon'/> MongoDB</li>
        </ul>
      </div>
    </div>
  )
}
