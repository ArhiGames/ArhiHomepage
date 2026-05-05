import CommercialProjectCardInformationComp from "./CommercialProjectCardInformationComp.tsx";
import "../Projects.css"
import type {Project, ProjectData} from "../Types.ts";
import projectdata from "../../../data/projects.json"
import {getTranslated} from "../../../translation/translation.ts";

const CommercialProjectsContainerComp = () => {

    function getAllProjectsData(): Project[] {
        const projects: Project[] = [];
        for (const [key, value] of Object.entries(projectdata["commercial"])) {
            projects.push({ id: key, translationId: key, projectData: value as ProjectData })
        }
        return projects;
    }

    return (
        <section id="commercial-projects">
            <h2>{getTranslated("sections.commercial_projects.header")}</h2>
            {getTranslated("sections.commercial_projects.paragraph").split("\n").map((line: string, index: number) => {
                return <p key={index}>{line}</p>
            })}
            <div className="projects">
                {getAllProjectsData().map((project: Project, index: number) => {
                    return <CommercialProjectCardInformationComp key={project.id} flipDirection={index % 2 == 1} project={project}/>
                })}
            </div>
        </section>
    )

}

export default CommercialProjectsContainerComp;