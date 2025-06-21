import {memo} from 'react';
import data from './country-by-surface-area.json';
import {useState} from 'react';
import './Countries.css';

const Countries = ({countries, addCountry, setCountries}) => {

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [selectedAmount, setSelectedAmount] = useState();

  const handleSelectChange = (e, index) => {
    const val = parseInt(e.target.value);

    setSelectedCountries((v) => {
      const newCountries = [...v];
      newCountries[index] = val;
      return newCountries;
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

  const removeOne = () => {
    let newArray = [];
    for(let i = 0; i < countries.length - 1; i++){
      newArray.push("new country");
    }
    setCountries(newArray);
  }


  return (
    <>
      <div id = "body">
        <div id = "header">
          <h1>
            Country Land Mass Addition Calculator
          </h1>
        </div>
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
          {countries.map((country, index) => {
            return (<>
            <div id = "countries" key = {index}>
              <label htmlFor={`countries-${index}`} for="countries">Country: </label>
              <select id={`countries-${index}`} name="countries" onChange = {(e) => handleSelectChange(e, index)}>
                <option value = "">Select Country</option>
                {data.map((c) => {
                  return <option key={c.country} value={c.area}>{c.country}</option>
                })}
              </select>
            </div>
            </>)
          })}
          <div id = "buttons">
            <button onClick = {addCountry}>Add Country</button>
            <button onClick = {removeOne}>Remove country</button>
            <button onClick = {calculateSum}>Calculate Sum</button>
          </div>
          <p>{sum}</p>
          <p><a href="/guide">Guide</a></p>
        </div>
        <br />
        <footer><p>Countries Land Mass API from <a href="https://github.com/samayo/country-json/blob/master/src/country-by-surface-area.json">https://github.com/samayo/country-json/blob/master/src/country-by-surface-area.json.</a></p></footer>
      </div>
    </>
  );
}

export default memo(Countries);
