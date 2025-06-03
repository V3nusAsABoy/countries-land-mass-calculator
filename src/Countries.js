import {memo} from 'react';

const Countries = ({countries, addCountry}) => {

  return (
    <>
      {countries.map((country) => {
        return <p>C</p>
      })}
      <button onClick = {addCountry}>Add</button>
    </>
  );
}

export default memo(Countries);
