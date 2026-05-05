import './App.css'
import CommercialProjectsContainerComp from "./components/projects/commercial/CommercialProjectsContainerComp.tsx";
import AboutUsComp from "./components/aboutus/AboutUsComp.tsx";
import HobbyProjectsContainerComp from "./components/projects/hobby/HobbyProjectsContainerComp.tsx";

function App() {

    return (
        <>
            <main>
                <AboutUsComp/>
                <CommercialProjectsContainerComp/>
                <HobbyProjectsContainerComp/>
            </main>
        </>
    )
}

export default App
