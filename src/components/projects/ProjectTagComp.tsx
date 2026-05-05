import type {Tag} from "./Types.ts";

interface Props {
    tag: Tag;
}

const ProjectTagComp = ({ tag }: Props) => {

    return (
        <div className="project-tag" style={{ backgroundColor: `var(--tag-${tag})` }}>
            {tag.toLowerCase()}
        </div>
    )

}

export default ProjectTagComp