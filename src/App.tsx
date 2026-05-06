import './App.css'
import CommercialProjectsContainerComp from "./components/projects/commercial/CommercialProjectsContainerComp.tsx";
import AboutUsComp from "./components/aboutus/AboutUsComp.tsx";
import HobbyProjectsContainerComp from "./components/projects/hobby/HobbyProjectsContainerComp.tsx";
import HeaderComp from "./components/header/HeaderComp.tsx";

function App() {

    return (
        <>
            <header>
                <HeaderComp/>
            </header>
            <main>
                <AboutUsComp/>
                <CommercialProjectsContainerComp/>
                <HobbyProjectsContainerComp/>
            </main>
        </>
    )
}

export default App
