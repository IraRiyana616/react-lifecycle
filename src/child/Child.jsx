import React, { useState, useEffect } from 'react';
import '/src/App.css';

const Child = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Memanggil API menggunakan fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="header">API Data:</h2>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="listItem">
            <strong className="title">{item.title}</strong>
            <p className="body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
