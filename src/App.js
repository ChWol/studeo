import React, {useState} from 'react';
import Header from "./Header";
import Routing from "./Routing";
import Footer from "./Footer";

function App() {
    const [home, setHome] = useState(true);
    const [done, setDone] = useState(false);
    const [answer, setAnswer] = useState();

    return (
        <div>
            <Header setHome={setHome}/>
            <Routing done={done} setDone={setDone} answer={answer}/>
            <Footer home={home} setHome={setHome} done={done} setDone={setDone} answer={answer} setAnswer={setAnswer}/>
        </div>
    );
}

export default App;
