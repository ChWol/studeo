// React imports
import React, {useState} from 'react';

// Own imports
import Header from "./Header";
import Routing from "./Routing";
import Footer from "./Footer";

function App() {
    // State controlling if currently displaying home screen
    const [home, setHome] = useState(localStorage.getItem('home') ?
    localStorage.getItem('home') === 'true' : true);
    // State controlling if explanation process is finished
    const [done, setDone] = useState(false);
    // State storing the answer after the explanation process is finished
    const [answer, setAnswer] = useState();

    // Rendering a top and bottom bar with routing content in between
    return (
        <div>
            <Header
                setHome={setHome}
            />
            <Routing
                done={done}
                setDone={setDone}
                answer={answer}
            />
            <Footer
                home={home}
                setHome={setHome}
                done={done}
                setDone={setDone}
                setAnswer={setAnswer}
            />
        </div>
    );
}

export default App;