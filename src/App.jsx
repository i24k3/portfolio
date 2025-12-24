"use strict";
import About from './components/About';
import Cursor from './components/Cursor';
import { Experience } from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';
import Projects from './components/Projects';
import ScrollInd from './components/ScrollInd';
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>

            <div className='bg-gray-100'>
                <Cursor/>

                <ScrollInd/>
                <Header/>
                {data && <HeroSection data={data.hero}/>}
                {data && <About data={data.aboutme}/>}
                {data && <Experience data={data.experience}/>}
                {data && <Projects data={data.projects}/>}
                <Footer/>

            </div>

        </>
    )
}

export default App
