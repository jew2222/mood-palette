import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import MoodResultPage from './pages/mood-result-page'
import ReportPage from './pages/report-page'

function App() {
 return (
  <Routes>
    <Route path ="/" element={<MoodResultPage/>} />
    <Route path ="/login" element={<LoginPage/>} />
    <Route path ="/register" element={<RegisterPage/>} />
    <Route path ="/report" element={<ReportPage/>} />
  </Routes>
 )
}

export default App
