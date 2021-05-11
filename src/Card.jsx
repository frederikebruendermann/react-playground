import * as React from 'react'
import './Card.css'

export default ({ isActive }) => {
  return (
    <section className="CardPart">
      <div className={isActive ? 'CardBookmarkSelected' : 'CardBookmark'}></div>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  )
}
