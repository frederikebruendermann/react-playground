import * as React from 'react'
import './header.css'

export default function Header({ children, isBackButtonVisible }) {
  return (
    <header className="Header">
      <button hidden={!isBackButtonVisible} isActive>
        &lt;
      </button>
      {children}
    </header>
  )
}
