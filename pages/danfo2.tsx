import { useEffect } from "react";
import { Series, readCSV } from "danfojs";

function App() {
    useEffect(() => {
        readCSV(
            "https://raw.githubusercontent.com/pandas-dev/pandas/master/doc/data/titanic.csv"
        )
            .then((df) => {
                df.plot("plot_div").table();
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div id="plot_div"></div>
            </header>
        </div>
    );
}

export default App;
