import type {Project} from "../Types.ts";
import {getTranslated, type TranslationKey} from "../../../translation/translation.ts";

interface Props {
    project: Project;
}

const HobbyProjectCardInformationComp = ({ project }: Props) => {

    const projectKey: string = `projects.${project.translationId}`;

    const projectName: string = getTranslated(`${projectKey}.name` as TranslationKey);
    const projectDescription: string = getTranslated(`${projectKey}.description` as TranslationKey);

    return (
        <div className="hobby-project-card">
            <div className="project-showcase">
                <img src={project.projectData.showcase} alt={`Image of ${projectName}`} width="320px"/>
            </div>
            <div className="project-information">
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
            </div>
        </div>
    )

}

export default HobbyProjectCardInformationComp;