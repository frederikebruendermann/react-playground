import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './header'
import Card from './Card'

const cards = [
  {
    title: 'Frage 1',
    question: 'Warum kann ein Bagger nicht schwimmen?',
    answer: 'Er hat nur einen Arm.',
    isAnswerVisible: true,
    isBookmarkActive: true,
    id: 1,
  },
  {
    title: 'Frage 2',
    question:
      'Was sagte der Erbauer des Schiefen Turms von Pisa vor dem Baubeginn?',
    answer: '„Wird schon schiefgehen!“',
    isAnswerVisible: false,
    isBookmarkActive: false,
    id: 2,
  },
  {
    title: 'Frage 3',
    question: 'Wie nennt der Physiker seine Kinder?',
    answer: 'Kelvin, Hektor und Pascal.',
    isAnswerVisible: true,
    isBookmarkActive: false,
    id: 3,
  },
  {
    title: 'Frage 4',
    question: 'Was schwimmt in einem See und fängt mit Z an?',
    answer: 'Zwei Enten.',
    isAnswerVisible: false,
    isBookmarkActive: true,
    id: 4,
  },
  {
    title: 'Frage 5',
    question: 'Wie nennt man einen Bumerang der nicht zurück kommt?',
    answer: 'Stock.',
    isAnswerVisible: true,
    isBookmarkActive: true,
    id: 5,
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
        {cards.map(
          ({
            id,
            title,
            question,
            answer,
            isBookmarkActive,
            isAnswerVisible,
          }) => (
            <Card
              key={id}
              title={title}
              question={question}
              answer={answer}
              isAnswerVisible={isAnswerVisible}
              isBookmarkActive={isBookmarkActive}
            />
          )
        )}
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
