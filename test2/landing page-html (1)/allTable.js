import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Red</th>
          <th>Green</th>
          <th>Blue</th>
          <th>Clear</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.temperature}</td>
            <td>{item.humidity}</td>
            <td>{item.red}</td>
            <td>{item.green}</td>
            <td>{item.blue}</td>
            <td>{item.clear}</td>
            <td>{item.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyComponent;
