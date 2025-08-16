"use strict";
import { HeroSection } from './components/HeroSection';
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>
            <div>
                {data && <HeroSection data={data.hero}/>}
            </div>

        </>
    )
}

export default App
