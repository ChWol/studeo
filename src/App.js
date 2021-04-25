import React, {useState} from 'react';
import Header from "./Header";
import Routing from "./Routing";
import Footer from "./Footer";

function App() {
    const [home, setHome] = useState(true);
    return (
        <div>
            <Header setHome={setHome}/>
            <Routing/>
            <Footer home={home} setHome={setHome}/>
        </div>
    );
}

export default App;
