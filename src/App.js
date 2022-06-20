import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teaching from './pages/Teaching';
import Publications from './pages/Publications';
import Videos from './pages/Videos';
import OpenProblems from './pages/OpenProblems';
import Resume from './pages/Resume';
import ProfileNavBar from './components/ProfileNavBar';
import './App.css';
import ProfileFooter from './components/ProfileFooter';


function App() {
  return (
    <div className='App'>
      <Router>
        <ProfileNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/openProblems' element={<OpenProblems />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <ProfileFooter />
      </Router>
    </div>
  )
}

export default App;