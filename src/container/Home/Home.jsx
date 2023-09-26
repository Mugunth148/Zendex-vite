import  "./Home.scss"
// import AnimatedText from "../../animations/Text/AnimatedText"
import { motion } from "framer-motion"
import { Overview} from "../../components"
import { Outlet } from "react-router-dom"
import Hero from "../../animations/Hero/Hero"


const Home = () => {
  
  return (
    <>
    <motion.div className="ball-container" id="home"
    initial={{opacity:0,y:40}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 2}}>
      <Hero />
      <div  className="pink-ball"></div>
      <div  className="blue-ball" ></div>
      <div  className="yellow-ball"></div>
    </motion.div>
    <Overview />
    <Outlet />
    </>
  )
}

export default Home
