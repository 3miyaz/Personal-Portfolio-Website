import './topbar.scss'
import { Person, Mail, LinkedIn, GitHub, Twitter, Instagram } from '@material-ui/icons'

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>
              2met.jk
            </a>
            {/* <div className="itemContainer">
              <Person className='icon'/>
              <span>+32 34 5677</span>
            </div> */}
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>ermias@kaist.ac.kr</span>
            </div>

            <div className="itemContainer">
              <a    
                className='icon'
                href="https://github.com/3miyaz"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedIn /> 
              </a>
            </div>

            <div className="itemContainer">
              <a   className='icon' 
                  href="https://github.com/3miyaz"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <GitHub className='icon'/>
              </a>
            </div>
            <div className="itemContainer">
              <a    
                className='icon'
                href="https://github.com/3miyaz"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter /> 
              </a>
            </div>
            <div className="itemContainer">
              <a    
                className='icon'
                href="https://github.com/3miyaz"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram /> 
              </a>
            </div>

          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar;