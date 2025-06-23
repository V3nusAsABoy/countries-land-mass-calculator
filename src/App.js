import {HashRouter, Route, Routes} from 'react-router-dom';
import Guide from './Guide.js';
import Main from './Main.js';

function App(){
    return(<HashRouter>

        <Routes>
            <Route exact path = '/' element ={<Main />}></Route>
            <Route exact path = '/guide' element ={<Guide />}></Route>
        </Routes>

    </HashRouter>)
}

export default App;