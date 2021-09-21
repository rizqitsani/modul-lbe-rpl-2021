import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <p>Error when fetching data</p>}
      {error ? <p>Error when fetching data</p> : null}
      {data ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      ) : (
        <p>Loading data..</p>
      )}
    </div>
  );
};

export default FetchData;
