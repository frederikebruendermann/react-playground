import * as React from 'react'
import './Card.css'

export default ({ isActive, title, text }) => {
  return (
    <section className="CardPart">
      <div className={isActive ? 'CardBookmarkSelected' : 'CardBookmark'}></div>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
