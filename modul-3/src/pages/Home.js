import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h3>Home Page</h3>
      <div>
        <Link
          to='/class-lifecycle'
          style={{ display: 'block', textDecoration: 'none' }}
        >
          Class Component Lifecycle
        </Link>
        <Link
          to='/functional-lifecycle'
          style={{ display: 'block', textDecoration: 'none' }}
        >
          Functional Component Lifecycle
        </Link>
        <Link
          to='/dynamic/1'
          style={{ display: 'block', textDecoration: 'none' }}
        >
          Dynamic Page
        </Link>
        <Link
          to='/data-fetching'
          style={{ display: 'block', textDecoration: 'none' }}
        >
          Data Fetching
        </Link>
      </div>
    </div>
  );
};

export default Home;
