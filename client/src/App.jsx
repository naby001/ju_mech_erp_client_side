import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import StudentPortfolio from './pages/student_form';
import AuthPage from './pages/AuthPage';


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/updateform" element={<StudentPortfolio/>}/>
      </Routes>
     
  </BrowserRouter>
  )
}

export default App
