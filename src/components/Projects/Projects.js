import './Projects.css'
import Projectbox from './UI/Projectbox'

export default function Projects() {
  return (
    <div className="project">
      <h2>Projects</h2>
      <div className='projects'>
        <div className='projects-wrapper'>
            <Projectbox/>
        </div>
      </div>
    </div>
  )
}
