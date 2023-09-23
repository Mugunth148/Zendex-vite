import { Link } from "react-router-dom"
import './Nav.scss'

function Nav() {

    const setDarkMode = () => {
        document.querySelector('html').setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('html').setAttribute('data-theme', 'light');
    };
  
    const toggleTheme= (e) => {
  
        if (e.target.checked) {
            setDarkMode()
        }
        else {
            setLightMode()
        }
    }

  return (
    <>
    <nav className="navbar">
                 <Link className="Link" to="/"><h1>Mugunth</h1></Link>
             <ul>
                 <Link className="Link" to="about"><li>About</li></Link>
                 <Link className="Link" to="work"><li>Work</li></Link>
                 <li id='darkmode'><div className='dark_mode'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggleTheme}
                />
                <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                </label>
            </div></li>
             </ul>
         </nav>
    </>
  )
}

export default Nav