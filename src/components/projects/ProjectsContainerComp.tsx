import ProjectCardInformationComp from "./ProjectCardInformationComp.tsx";
import "./Projects.css"
import type {Project, ProjectData} from "./Types.ts";
import projectdata from "../../data/projects.json"

const ProjectsContainerComp = () => {

    function loadProjectData(projectId: string): ProjectData {
        type ProjectDataMap = Record<string, ProjectData>;
        const data: ProjectDataMap = projectdata as ProjectDataMap;

        return data[projectId];
    }

    const publishedProjects: Project[] = [
        {
            id: "ultimanex",
            translationId: "ultimanex",
            projectData: loadProjectData("ultimanex")
        },
        {
            id: "arhitodo",
            translationId: "arhitodo",
            projectData: loadProjectData("arhitodo")
        },
        {
            id: "kitchenquest",
            translationId: "kitchenquest",
            projectData: loadProjectData("kitchenquest")
        },
        {
            id: "findtheway",
            translationId: "findtheway",
            projectData: loadProjectData("findtheway")
        }
    ]

    return (
        <section id="projects">
            {publishedProjects.map((project: Project, index: number) => {
                return <ProjectCardInformationComp key={project.id} flipDirection={index % 2 == 1} project={project}/>
            })}
        </section>
    )

}

export default ProjectsContainerComp;