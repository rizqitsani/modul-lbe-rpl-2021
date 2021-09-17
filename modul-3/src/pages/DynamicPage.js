import { useParams } from 'react-router-dom';

const DynamicPage = () => {
  const params = useParams();

  return (
    <div>
      <h3>This is dynamic page</h3>
      <p>{JSON.stringify(params)}</p>
      <p>ID: {params.id}</p>
    </div>
  );
};

export default DynamicPage;
