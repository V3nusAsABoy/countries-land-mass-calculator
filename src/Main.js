import {useState} from 'react';
import Countries from './Countries';

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

export default Main;