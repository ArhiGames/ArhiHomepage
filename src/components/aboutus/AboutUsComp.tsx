import {getTranslated} from "../../translation/translation.ts";
import SocialLinkComp from "./SocialLinkComp.tsx";
import "./AboutUs.css"

const AboutUsComp = () => {

    return (
        <section id="about-us">
            <h2>{getTranslated("sections.about_us.header")}</h2>
            {getTranslated("sections.about_us.paragraph").split("\n").map((line: string, index: number) => {
                return <p key={index}>{line}</p>
            })}
            <div className="socials">
                <SocialLinkComp socialLinkType="github"/>
                <SocialLinkComp socialLinkType="youtube"/>
                <SocialLinkComp socialLinkType="steam"/>
            </div>
        </section>
    )

}

export default AboutUsComp;