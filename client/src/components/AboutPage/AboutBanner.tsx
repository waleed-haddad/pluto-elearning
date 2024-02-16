import backgroundImg from '../../../public/aboutImg/BannerImg.png';

export const AboutBanner = () => {
    return(
        <div className="aboutBanner">
            <div className="leftSide">
                <div className="bannerTitle">Our</div>
                <div className="bannerTitle2">Mission</div>
                <div className="bannerText">
                    At PLUTO E-learning, our mission is to empower individuals with the knowledge and skills to
                    navigate the complex world of finance confidently.
                    We are committed to providing accessible and comprehensive e-learning resources that
                    demystify financial concepts, promote financial literacy, and foster informed decision-making.
                </div>
            </div>
            <div className="rightSide">
                <img src={backgroundImg} alt="courseBanner" className="backBackgroundImg" />
            </div>
        </div>
    )
}