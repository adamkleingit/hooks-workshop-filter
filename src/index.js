import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { CurrentTime } from "./CurrentTime";
import { arr, getFilteredData } from "./utils";

function App() {
  const [data] = useState(arr);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(() =>
    getFilteredData(filter, data)
  );

  useEffect(
    function syncFilteredData() {
      setFilteredData(getFilteredData(filter, data));
    },
    [filter, data]
  );

  return (
    <div>
      <input
        min="1"
        max="10"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>current time</th>
          </tr>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <CurrentTime offset={item.offset} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
