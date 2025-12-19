import { useState } from 'react'
import { Link } from 'react-router-dom'
import menuList from '../data/list_hrd.json'
import './Header.css'


const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      {/* 좌측 로고 */}
      <h1 className="header__logo">HRD</h1>

      {/* 우측 드롭다운 */}
      <div className="dropdown">
        <button
          className="dropdown__button"
          onClick={() => setOpen(!open)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          관리프로그램 ▾
        </button>

        {open && (
          <ul className="dropdown__menu">
            {menuList.map(item => (
              <li key={item.id} className="dropdown__item">
                <Link to={item.path} className="dropdown__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header