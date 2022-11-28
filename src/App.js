
import './App.css';
import './normalize.css'
import { useState } from 'react'
import sportseeData from './data/data.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import User from './pages/User'



function App() {

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<User data={sportseeData} />}></Route>
          <Route path="user/:id" element={<User data={sportseeData} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
