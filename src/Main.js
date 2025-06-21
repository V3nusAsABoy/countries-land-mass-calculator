import {useState} from 'react';
import Countries from './Countries';
import { withRouter } from 'react-router-dom';

const Main = () => {
    const [countries, setCountries] = useState(["First Country", "Second Country"]);

    const addCountries = () => {
        setCountries((t) => [...t, "New Country"]);
      };

    return(
        <>
            <Countries countries={countries} addCountry={addCountries} setCountries={setCountries}/>
        </>
    )
}

export default withRouter(Main);