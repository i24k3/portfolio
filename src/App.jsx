"use strict";
import { useJsonData } from './hooks/useJsonData';

function App() {

    const {data, loading, error} = useJsonData("/home.json");

    return (
        <>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && <p>{JSON.stringify(data)}</p>}
            </div>

        </>
    )
}

export default App
