import {getTranslated} from "../../../translation/translation.ts";
import type {Project, ProjectData} from "../Types.ts";
import HobbyProjectCardInformationComp from "./HobbyProjectCardInformationComp.tsx";
import projectdata from "../../../data/projects.json"

const HobbyProjectsContainerComp = () => {

    function getAllHobbyProjects(): Project[] {
        const projects: Project[] = [];
        for (const [key, value] of Object.entries(projectdata["hobby"])) {
            projects.push({ id: key, translationId: key, projectData: value as ProjectData })
        }
        return projects;
    }

    return (
        <section id="hobby-projects">
            <h2>{getTranslated("sections.hobby_projects.header")}</h2>
            {getTranslated("sections.hobby_projects.paragraph").split("\n").map((line: string, index: number) => {
                return <p key={index}>{line}</p>
            })}
            <div className="hobby-projects">
                {getAllHobbyProjects().map((project: Project) => {
                    return <HobbyProjectCardInformationComp key={project.id} project={project}/>
                })}
            </div>
        </section>
    )

}

export default HobbyProjectsContainerComp;