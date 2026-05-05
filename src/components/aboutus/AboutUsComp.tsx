import {getTranslated} from "../../translation/translation.ts";

const AboutUsComp = () => {

    return (
        <section id="about-us">
            <h2>{getTranslated("sections.about_us.header")}</h2>
            {getTranslated("sections.about_us.paragraph").split("\n").map((line: string) => {
                return <p>{line}</p>
            })}
        </section>
    )

}

export default AboutUsComp;