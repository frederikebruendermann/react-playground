import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './header'
import Card from './Card'

const cards = [
  {
    title: 'Frage 1',
    text: 'Warum kann ein Bagger nicht schwimmen?',
    isBookmarked: true,
  },
  {
    title: 'Frage 2',
    text:
      'Was sagte der Erbauer des Schiefen Turms von Pisa vor dem Baubeginn?',
    isBookmarked: false,
  },
  {
    title: 'Frage 3',
    text: 'Wie nennt der Physiker seine Kinder?',
    isBookmarked: false,
  },
  {
    title: 'Frage 4',
    text: 'Was schwimmt in einem See und fängt mit Z an?',
    isBookmarked: true,
  },
  {
    title: 'Frage 5',
    text: 'Wie nennt man einen Bumerang der nicht zurück kommt?',
    isBookmarked: true,
  },
]

export default ({ children, text }) => {
  return (
    <div className="App">
      <section className="HeaderBox">
        <Header isBackButtonVisible>Home</Header>
        <Header isBackButtonVisible>Settings</Header>
        <Header isBackButtonVisible>Profile</Header>
      </section>
      <section className="CardBox">
        {cards.map(card => (
          <Card
            title={card.title}
            copyText={card.text}
            isBookmarked={card.isBookmarked}
          />
        ))}
      </section>
      <section className="PaginationBox">
        <Pagination isLeftDisabled text={' ' + '1/34'} />
        <Pagination text={' ' + '2/34'} />
        <Pagination isRightDisabled text="34/34" />
      </section>
      <section className="ButtonBox">
        <Button>Moin there</Button>
      </section>
    </div>
  )
}
