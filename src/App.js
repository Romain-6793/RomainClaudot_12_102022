
import './App.css';
import './normalize.css'
import { useState, useEffect } from 'react'
import sportseeData from './data/data.js'
import Header from './components/Header'
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
      <Header /><MainWrapper />
    </>
  );
}

export default App;
