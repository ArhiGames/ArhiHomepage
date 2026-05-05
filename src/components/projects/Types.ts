export type Tag = "ue5" | "unity" | "cpp" | "steam" | "game" | "aspnet" | "react" | "csharp" | "website" | "googleplay"

export type ProjectData = {
    showcase: string;
    tags: Tag[];
}

export type Project = {
    id: string;
    translationId: string;
    projectData: ProjectData;
}