import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loading from './components/Loading.jsx'

const Root = () => {
    const [showApp, setShowApp] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setShowApp(true);
        }, 5000);
        return () => clearTimeout(timer);
    },[]);
    return showApp ? <App/> : <Loading/>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Root/>
    </StrictMode>,
)

