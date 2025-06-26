import './Countries.css';
import select from './img/select.png';
import addremovecalc from './img/addremovecalc.png';
import {Link} from 'react-router-dom';

const Guide = () => {
    return(
        <>
            <div id = "body">
                <div id = "header">
                    <h1>Guide</h1>
                </div>
                <div id = "guide">
                    <h2>Selecting amount of countries</h2>
                    <p>Use the drop down button menu to select the amount of countries you want to calculate the sum of the land masses of then press the "confirm" button
                        To generate that amount of countries.
                    </p>
                    <img src={select} alt="drop down menu for amount of countries and confirm button"/>
                    <h2>Adding and removing countries</h2>
                    <p>
                        You can press the "add country" button to add 1 country, even after selecting a specific amount of countries. You can press the "remove country" button
                        to remove 1 country, even after specifying an amount of countries.
                    </p>
                    <img src={addremovecalc} alt="add country, remove country, and calculate sum buttons"/>
                    <h2>Calculate sum</h2>
                    <p>
                        Once you have selected all the countries, press the "calculate sum" button to calculate and display the sum of the land masses of the countries.
                    </p>
                    <p><Link to='/'>Home</Link></p>
                </div>
                <br />
            </div>
        </>
    )
}

export default Guide;