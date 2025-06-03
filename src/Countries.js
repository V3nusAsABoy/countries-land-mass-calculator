import {memo} from 'react';
import data from './country-by-surface-area.json';
import {useState} from 'react';

const Countries = ({countries, addCountry}) => {

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleSelectChange = (e) => {
    const val = parseInt(e.target.value);

    setSelectedCountries((v) => {
      return [...v, val]
    })
  }
  
  const [sum, setSum] = useState();

  const calculateSum = () => {
    let s = 0;
    for(let i = 0; i < selectedCountries.length; i++){
      s+=selectedCountries[i];
    }
    setSum(s);
  }


  return (
    <>
      {countries.map((country) => {
        return (<>
        <label for="countries">Country: </label>
        <select name="countries" onChange = {handleSelectChange}>
          <option>Select Country</option>
          {data.map((c) => {
            return <option value={c.area}>{c.country}</option>
          })}
        </select>
        </>)
        
      })}
      <button onClick = {addCountry}>Add Country</button>
      <button onClick = {calculateSum}>Calculate Sum</button>
      <p>{sum}</p>
    </>
  );
}

export default memo(Countries);
