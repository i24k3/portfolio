"use strict";
import About from './components/About';
import Cursor from './components/Cursor';
import { HeroSection } from './components/HeroSection';
import ScrollInd from './components/ScrollInd';
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>
            <div className='bg-gray-300'>
                <Cursor/>

                <ScrollInd/>
                <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
                    <div className="h-full w-full snap-start">
                        {data && <HeroSection data={data.hero}/>}
                    </div>
                    <div className="h-screen w-screen snap-start">
                        {data && <About data={data.aboutme}/>}
                    </div>

                </div>

                {/* {data && <HeroSection data={data.hero}/>} */}
                {/* {data && <About data={data.aboutme}/>} */}

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
