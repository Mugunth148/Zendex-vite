import  "./Home.scss"
import {Overview} from "../../components"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
    <h1 className="hero-content">
      Hello Guys👋, Im Mugunth,a frontend Developer, UI/UX designer & 3D artist. I love creating
       beautiful and functional user interfaces. Im passionate about using technology to
       solve problems and create user experiences that people love.
    </h1>
    <div className="ball-container" id="home">
      <div  className="pink-ball"></div>
      <div className="blue-ball" ></div>
      <div className="yellow-ball"></div>
    </div>
    <Overview />
    <Outlet />
    </>
  )
}

export default Home
