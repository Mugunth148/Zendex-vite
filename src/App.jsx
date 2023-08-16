
import {Home, About, Work,} from './container';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import { Darkmode } from "./components"; 
import './components/Darkmode/DarkMode.scss';

const App = () => { 

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

   <div id="root" >
    <Router>
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
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='about' element={<About/>}/>
       <Route exact path='work'  element={<Work/>}/>
       </Routes>
    </Router>
    </div>
 )
};


export default App

