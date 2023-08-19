import {useState} from 'react';
import styles from './Ham.module.scss';
import { AnimatePresence } from 'framer-motion';

function Ham() {

    const [isActive, setIsActive] = useState(false);
  return (
    <>
     <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
        <AnimatePresence mode="wait">
           {isActive }
      </AnimatePresence>
    </>
  )
}

export default Ham