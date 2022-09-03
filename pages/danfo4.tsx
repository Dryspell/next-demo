import { useEffect } from "react";
import * as dfd from "danfojs";

function App() {
    useEffect(() => {
        const getData = async () => {
            const data = await fetch("http://localhost:3000/api/contacts").then(
                (res) => res.json()
            );
            console.log("I'm Logging the Data", data);
            return data;
        };
        getData()
            .then((data) => {
                const df = new dfd.DataFrame(data);
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
