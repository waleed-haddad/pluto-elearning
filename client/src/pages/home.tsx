import avatar from "../assets/home_top_img.png"
import founded from "../assets/founded_by.png"
import cash from "../assets/cash_home.png"
import credit from "../assets/credit_home.png"
import invest from "../assets/investing_home.png"
import { Link } from 'react-router-dom';

export default function Home() {
    return(
      <div>
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

        <div className="home_body container-width">
          <div className="founded_by_home">
            <h3><span className="light_grey_text">Founded By The Members Of</span></h3>
            <img src={founded} alt="Enactus Logo and UofT Logo" width="400px"/>
          </div>
          <div className="what_is_pluto_home">
            <h1><span className="dark_blue_text"><strong>What is <span className="light_blue_text">PLUTO</span>?</strong></span></h1>
            <p><span className="light_grey_text">Pluto is a free e-learning platform that aims to democratize financial knowledge for everyone through comprehensive and engaging lessons that can be applied in the real world today!</span></p>
          </div>
          <div className="budget_and_investing_home">
            <div className="home_top_left">
              <h1>BUDGETING 💸 </h1>
              <p>Unlock financial stability and make your money work for you! Dive into our expert tips and tools on us! #SmartMoneyMoves #FinancialWellness</p>
              <button className="home_buttons">Learn To Budget</button>
            </div>
            <div className="right-side">
              <img src={cash} alt="Pile of Cash" width="550px"/>
            </div>
          </div>
          <div className="building_credit_home">
          <div className="home_top_right">
            <div className="left-side">
              <img src={credit} alt="Investing Icon" width="550px"/>
            </div>
              <h1>INVESTING 📈</h1>
              <p>Grow your wealth, one smart investment at a time. Dive into our 'Investing' section for expert strategies and market insights. #WealthBuilding #SmartInvestingJourney</p>
              <button className="home_buttons">Learn To Invest</button>
            </div>
          </div>
          <div className="budget_and_investing_home">
          <div className="home_top_left">
              <h1>INVESTING 📈</h1>
              <p>Grow your wealth, one smart investment at a time. Dive into our 'Investing' section for expert strategies and market insights. #WealthBuilding #SmartInvestingJourney</p>
              <button className="home_buttons">Learn To Invest</button>
            </div>
            <div className="right-side">
              <img src={invest} alt="Investing Icon" width="500px"/>
            </div>
          </div>
        </div>
      </div>
    )
  }