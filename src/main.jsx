import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loading from './components/Loading.jsx'

const Root = () => {
    const [showApp, setShowApp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowApp(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={showApp ? 'cursor-none' : 'cursor-default'}>
            <App />
            {!showApp && (
                <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                    <Loading />
                </div>
            )}
        </div>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Root/>
    </StrictMode>,
)

