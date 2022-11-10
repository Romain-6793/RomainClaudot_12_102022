
import './App.css';
import { useState, useEffect } from 'react'
import sportseeData from './data/data.js'
import Header from './components/Header'
import Aside from './components/Aside'
import MainWrapper from './components/MainWrapper'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {

    if (sportseeData) {
      setData(sportseeData)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sportseeData])

  console.log(data)

  return (
    <>
      <h1>My react project</h1>
      <Header /><Aside /><MainWrapper />
    </>
  );
}

export default App;
