import './Countries.css';

const Guide = () => {
    return(
        <>
            <div id = "body">
                <div id = "header">
                    <h1>Guide</h1>
                </div>
                <div id = "main" class="guide">
                    <h2>Selecting amount of countries</h2>
                    <p>Use the drop down button menu to select the amount of countries you want to calculate the sum of the land masses of then press the "confirm" button
                        To generate that amount of countries.
                    </p>
                    <h2>Adding and removing countries</h2>
                    <p>
                        You can press the "add country" button to add 1 country, even after selecting a specific amount of countries. You can press the "remove country" button
                        to remove 1 country, even after specifying an amount of countries.
                    </p>
                    <h2>Calculate sum</h2>
                    
                </div>
            </div>
        </>
    )
}

export default Guide;