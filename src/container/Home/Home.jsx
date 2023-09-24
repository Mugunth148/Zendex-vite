import  "./Home.scss"
// import AnimatedText from "../../animations/Text/AnimatedText"
import { motion } from "framer-motion"
import { Overview} from "../../components"
import { Outlet } from "react-router-dom"
import Hero from "../../animations/Hero/Hero"


const Home = () => {

  // const placeholderText = [
  //   { type: "inputText", text: "Hello Guys, Im Mugunth,a frontend Developer, UI/UX designer & 3D artist. I love creating beautiful and dynamic user interfaces. Im passionate about using technology to solve problems and create user experiences that people love."}
  // ];

  // const container = {
  //   visible: {transition: {staggerChildren: 0.025}}
  // };
  
  return (
    <>
    <motion.div className="ball-container" id="home"
    initial={{opacity:0.5,y:20}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 1}}>
    {/* <motion.div
      className="Hero-container"
      initial="hidden"
      animate="visible"
      variants={container}
      >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div> */}
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
