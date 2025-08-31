"use strict";
import Cursor from './components/Cursor';
import { HeroSection } from './components/HeroSection';
import Loading from './components/Loading';
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>
            <div>
                <Cursor/>
                {data && <HeroSection data={data.hero}/>}

                <SiteNotice/>
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
