import * as React from 'react'
import './Card.css'

export default ({
  isBookmarkActive,
  title,
  question,
  answer,
  isAnswerVisible,
}) => {
  return (
    <section className="CardPart">
      <div
        className={isBookmarkActive ? 'CardBookmarkSelected' : 'CardBookmark'}
      ></div>
      <h2>{title}</h2>
      <p>{'Frage: ' + question}</p>
      <p className={isAnswerVisible ? '' : 'InvisibleAnswer'}>{answer}</p>
    </section>
  )
}
