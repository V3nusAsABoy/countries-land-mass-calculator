import {useState} from "react";

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    setCountries((c) => [...c,""]);
  }

  return (
    <>
      {countries.map((country) => {
        return <p>C</p>
      })}
      <button onClick = {addCountry}>Add</button>
    </>
  );
}

export default App;
