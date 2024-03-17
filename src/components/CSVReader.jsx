import React, { useState } from "react";
import Papa from "papaparse";
import fs from 'fs'

// Allowed extensions for input file
const allowedExtensions = ["csv"];
function CSVReader() {
    // This state will store the parsed data
    const [data, setData] = useState([]);

    const [error, setError] = useState("");

    const [file, setFile] = useState("");

    const handleFileChange = (e) => {
        setError("");

        fs.readFile('./assets/transaction_dataset.csv', 'binary', (err, data) => {
            console.log('data😒😒', data)
        })

        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            const fileExtension =
                inputFile?.type.split("/")[1];
            if (
                !allowedExtensions.includes(fileExtension)
            ) {
                setError("Please input a csv file");
                return;
            }

            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {

        // If user clicks the parse button without
        // a file we show a error
        if (!file) return alert("Enter a valid file");

        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, {
                header: true,
            });
            const parsedData = csv?.data;
            const rows = Object.keys(parsedData[0]);

            const columns = Object.values(parsedData[0]);
            const res = rows.reduce((acc, e, i) => {
                return [...acc, [[e], columns[i]]];
            }, []);
            console.log(res);
            setData(res);
        };
        reader.readAsText(file);
    };

    return (
        <div className="App">
            <h1 className="geeks">GeeksforGeeks</h1>
            <h3>Read CSV file in React</h3>
            <div className="container">
                <label
                    htmlFor="csvInput"
                    style={{ display: "block" }}
                >
                    Enter CSV File
                </label>
                <input
                    onChange={handleFileChange}
                    id="csvInput"
                    name="file"
                    type="File"
                />
                <div>
                    <button onClick={handleParse}>
                        Parse
                    </button>
                </div>
                <div style={{ marginTop: "3rem" }}>
                    {error
                        ? error
                        : data.map((e, i) => (
                            <div key={i} className="item">
                                {e[0]}:{e[1]}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default CSVReader;