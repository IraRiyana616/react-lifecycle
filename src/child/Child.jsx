// import React, { useState, useEffect } from 'react';
// import '/src/App.css';

// const Child = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Memanggil API menggunakan fetch
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="header">API Data:</h2>
//       <ul className="list">
//         {data.map((item) => (
//           <li key={item.id} className="listItem">
//             <strong className="title">{item.title}</strong>
//             <p className="body">{item.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Child;
import React, { useState } from 'react';
import axios from 'axios';
import '/src/App.css';

const Child = () => {
  const [postData, setPostData] = useState(null);

  const handleGet = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1') // Menggunakan method GET
      .then((response) => {
        const data = response.data;
        // Memodifikasi data sesuai format yang diinginkan
        const modifiedData = {
          id: 101,
          title: 'foo',
          body: 'bar',
          userId: 1,
        };
        setPostData(modifiedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="container">
      <button onClick={handleGet} className="postButton">
        Get Data
      </button>

      {postData && (
        <div className="postData">
          <h3>Fetched Data:</h3>
          <strong className="title">{postData.title}</strong>
          <p className="body">{postData.body}</p>
          <p className="userId">User ID: {postData.userId}</p>
        </div>
      )}
    </div>
  );
};

export default Child;
