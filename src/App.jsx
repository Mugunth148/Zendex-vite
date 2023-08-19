
import {Home, About, Work,} from './container';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './components/Darkmode/DarkMode.scss';
import { Ham } from './components';

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
    <Ham />
    <Router>
       <nav className="navbar">
            <Link className="Link" to="/"><h1>Mugunth</h1></Link>
        <ul>
            <Link className="Link" to="about"><li>About< hr/></li></Link>
            <Link className="Link" to="work"><li>Work<hr/></li></Link>
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
       <Route  exact path='*' element={<Home/>}/>
       <Route  path='about' element={<About/>}/>
       <Route  path='work'  element={<Work/>}/>
       {/* <Route path='/' element={<h1>404</h1>}/>  */}
       </Routes>
    </Router>
    </div>
 )
};


export default App

