import { useEffect, useState } from 'react'
import { Route,Routes ,Link} from 'react-router-dom'
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
    <Route path="/mood" element={<div></div>} >    
      <Route path="test" element={ <div>테스트</div> } />  
      <Route path="report" element={<ReportPage/>} />
    </Route>
  </Routes>
 )
}

export default App
