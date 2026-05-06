import {getTranslated, type TranslationKey} from "../../../translation/translation.ts";
import type {Project, Tag} from "../Types.ts";
import ProjectTagComp from "../ProjectTagComp.tsx";

interface Props {
    project: Project;
    flipDirection: boolean;
}

const CommercialProjectCardInformationComp = ({ project, flipDirection }: Props) => {

    const projectKey: string = `projects.${project.translationId}`;

    const projectName: string = getTranslated(`${projectKey}.name` as TranslationKey);
    const projectDescription: string = getTranslated(`${projectKey}.description` as TranslationKey);

    return (
        <div className="project-card commercial-project-card" style={{ flexDirection: flipDirection ? "row-reverse" : "row" }}>
            <div className="project-information">
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
            </div>
            <div className="project-showcase">
                <img src={project.projectData.showcase} alt={`Image of ${projectName}`}/>
                <div className="project-tags">
                    {project.projectData.tags.map((tag: Tag, index: number) => {
                        return <ProjectTagComp key={index} tag={tag}/>
                    })}
                </div>
            </div>
        </div>
    )

}

export default CommercialProjectCardInformationComp;