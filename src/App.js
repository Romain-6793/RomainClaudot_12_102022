
import './App.css';
import './normalize.css'
import { useState, useEffect } from 'react'
import sportseeData from './data/data.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import User from './pages/User'


function App() {

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  // useEffect(() => {

  //   if (sportseeData) {
  //     setData(sportseeData)
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={sportseeData} />}>
          <Route index element={<User data={sportseeData} />}></Route>
          <Route path="user/:id" element={<User data={sportseeData} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
