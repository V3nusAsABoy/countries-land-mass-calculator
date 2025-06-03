import {useState} from 'react';
import Countries from './Countries';

const App = () => {
    const [countries, setCountries] = useState(["First Country"]);

    const addCountries = () => {
        setCountries((t) => [...t, "New Country"]);
      };

    return(
        <>
            <Countries countries={countries} addCountry={addCountries}/>
        </>
    )
}

export default App;