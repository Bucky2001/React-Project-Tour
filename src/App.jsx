import Tours from './assets/Tours';
import Loading from './assets/Loading';
import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tours-project';
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setTours(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  if (tours.length === 0 && !loading) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {loading ? <Loading /> : <Tours data={tours} removeTour={removeTour} />}
    </main>
  );
};
export default App;
