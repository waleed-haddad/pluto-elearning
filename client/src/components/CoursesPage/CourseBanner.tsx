import backgroundImg from '../../assets/sales-hub 1.png'

export const CourseBanner = () => {
    return(
        <div className="courseBanner">
            <div className="bannerTitle">Learn about Finance Today!</div>
            <div className="bannerText">
                Join a community of ambitious learners commited to financial excellence.
                With Pluto E-Learning, you're not just gaining knowledge - you're forging a path to financial mastery!
            </div>
            <button className="bannerButton">Request a Course Topic</button>
            <img src={backgroundImg} alt="courseBanner" className="courseBackgroundImg" />
            
        </div>
    )
}