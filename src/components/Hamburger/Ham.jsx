import {useState} from 'react';
import styles from './Ham.module.scss';



function Ham() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
     <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
        <div  className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </div>
    </>
  )
}

export default Ham