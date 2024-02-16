import { AboutBanner } from "../components/AboutPage/AboutBanner";
import { AboutList } from "../components/AboutPage/AboutList";
import "../components/AboutPage/AboutPage.css";

export default function About() {
    return(
      <div className="aboutPage">
        <AboutBanner />
        <h1 className="divider">Our Team</h1>
        <AboutList />
      </div>
    )
}