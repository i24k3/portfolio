"use strict";
import { HeroSection } from './components/HeroSection';
import Loading from './components/Loading';
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>
            <div>
                {loading && <Loading/>}
                {data && <HeroSection data={data.hero}/>}
            </div>

        </>
    )
}

export default App
