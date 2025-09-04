import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loading from './components/Loading.jsx'

const Root = () => {
    const [loading, setLoading] = useState(true); // start the data load from the get go

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={loading ? 'cursor-none' : 'cursor-default'}>
            <div className='relative'>
            <App />

            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 transition-opacity duration-500 ">
                    <Loading />
                </div>
            )}
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Root/>
    </StrictMode>,
)

