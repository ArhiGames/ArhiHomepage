import './App.css'
import ProjectsContainerComp from "./components/projects/ProjectsContainerComp.tsx";
import AboutUsComp from "./components/aboutus/AboutUsComp.tsx";

function App() {

    return (
        <>
            <main>
                <AboutUsComp/>
                <ProjectsContainerComp/>
            </main>
        </>
    )
}

export default App
