import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Guide from './Guide.js';
import Main from './Main.js';

function App(){
    return(<Router>
        <Switch>
            <Route exact path = '/' component ={Main}></Route>
            <Route exact path = '/guide' component ={Guide}></Route>
        </Switch>
    </Router>)
}

export default App;