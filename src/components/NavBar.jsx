import { Color } from '../styles'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">감정 결과</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link>
        </li>
        <li>
          <Link to="/mood/report">보고서</Link>
        </li>
        <li>
          <Link to="/mood/result">감정 결과</Link>
        </li>
        <li>
          {' '}
          <Link to="/calendar">달력</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default NavBar