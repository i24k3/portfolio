"use strict";
import About from './components/About';
import Cursor from './components/Cursor';
import { Experience } from './components/Experience';
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
                {data && <HeroSection data={data.hero}/>}
                {data && <About data={data.aboutme}/>}
                {data && <Experience data={data.experience}/>}
                {data && <Projects data={data.projects}/>}

                {/* <SiteNotice/> */}
            </div>
        </>
    )
}


export function SiteNotice() {
    return (
    <div className="w-full flex justify-center mt-8 px-4">
      <div className="border border-amber-600 text-gray-900 px-4 py-3 rounded-md text-center max-w-2xl w-full">
        <p className="text-sm sm:text-base leading-relaxed">
          <span className="font-semibold text-black">Site in progress:</span> This project is currently under development. New features and improvements are on the way.
        </p>
      </div>
    </div>
  );
}


export default App
