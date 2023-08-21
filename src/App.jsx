
import {Home, About, Work,} from './container';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import './components/Darkmode/DarkMode.scss';
import styles from './components/Hamburger/Ham.module.scss';
import { Nav } from './components';

function App() {

    const [isActive, setIsActive] = useState(false);

    const [isBurgerVisible, setIsBurgerVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 0 && window.scrollY <= 10) {
          setIsBurgerVisible(true);
        } else {
          setIsBurgerVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (

        <div id="root">
            <Router>
                <motion.div initial={{ opacity: 0, visibility: 'hidden' }}
                     animate={{
                      opacity: isBurgerVisible ? 1 : 0,
                      visibility: isBurgerVisible ? 'visible' : 'hidden',
                    }}
                    onClick={() => { setIsActive(!isActive); } } className={styles.button}>
                    <div 
                    className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </motion.div>
                <Nav />
                <Routes>
                    <Route exact path='*' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='work' element={<Work />} />
                    {/* <Route path='/' element={<h1>404</h1>}/>  */}
                </Routes>
            </Router>
        </div>
    );
}


export default App

