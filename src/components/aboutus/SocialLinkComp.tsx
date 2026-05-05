import {getTranslated} from "../../translation/translation.ts";

export type SocialLinkType = "youtube" | "github" | "steam";

interface Props {
    socialLinkType: SocialLinkType;
}

const SocialLinkComp = ({ socialLinkType }: Props) => {

    const socialName: string =
        socialLinkType === "youtube" ? getTranslated("socials.youtube") :
        socialLinkType === "github" ? getTranslated("socials.github") :
        socialLinkType === "steam" ? getTranslated("socials.steam")
            : "";

    const socialLink: string =
        socialLinkType === "youtube" ? "https://www.youtube.com/@arhigames" :
        socialLinkType === "github" ? "https://github.com/ArhiGames" :
        socialLinkType === "steam" ? "https://store.steampowered.com/developer/arhigames"
            : "";

    return (
        <div className="social">
            <img src={`/${(socialLinkType as string)}.svg`} alt="" width={28}></img>
            <a className="social-link" href={socialLink}>{socialName}</a>
        </div>
    )

}

export default SocialLinkComp;