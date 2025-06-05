import {memo} from 'react';
import data from './country-by-surface-area.json';
import {useState} from 'react';

const Countries = ({countries, addCountry, setCountries}) => {

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [selectedAmount, setSelectedAmount] = useState();

  const handleSelectChange = (e) => {
    const val = parseInt(e.target.value);

    setSelectedCountries((v) => {
      return [...v, val]
    })
  }

  const handleMoreCountries = (e) => {
    const val = parseInt(e.target.value);
    setSelectedAmount(val);
  }
  
  const [sum, setSum] = useState();

  const calculateSum = () => {
    let s = 0;
    for(let i = 0; i < selectedCountries.length; i++){
      s+=selectedCountries[i];
    }
    setSum(`The sum is: ${s} Km²`);
  }

  const addMore = () => {
    let countriesToAdd = [];
    for(let i = 0; i < selectedAmount; i++){
      countriesToAdd.push("new country");
    }

    setCountries(countriesToAdd);
  }


  return (
    <>
      <div id = "main">
        <div id = "howMany">
            <label for="many">How many countries?</label>
            <select onChange = {handleMoreCountries}>
            {Array.from({length: 100}, (_, i) => i + 1).map((n) => {
              return <option value={n}>{n}</option>
            })
            }
            </select>
            <button onClick = {addMore}>Confirm</button>
        </div>
        {countries.map((country) => {
          return (<>
          <div id = "countries">
            <label for="countries">Country: </label>
            <select name="countries" onChange = {handleSelectChange}>
              <option>Select Country</option>
              {data.map((c) => {
                return <option value={c.area}>{c.country}</option>
              })}
            </select>
          </div>
          </>)
          
        })}
        <button onClick = {addCountry}>Add Country</button>
        <button onClick = {calculateSum}>Calculate Sum</button>
        <p>{sum}</p>
      </div>
    </>
  );
}

export default memo(Countries);
