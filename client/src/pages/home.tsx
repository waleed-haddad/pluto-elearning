import avatar from "../assets/home_top_img.png"
import { Link } from 'react-router-dom';

export default function Home() {
    return(
      <div className="top_page">
        <div className="home_top_left">
          <h1><span className="light_blue_text">Launch</span> Into Financial Mastery Today</h1>
          <p>Discover, learn, and conquer your path to financial success now!</p>
          <Link to="/courses"><button>Start Learning</button></Link>
        </div>
        
        <div className="home_top_right">
          <img src={avatar} alt="Home Avatar Image" width="700px"/>
        </div>
      </div>
    )
  }