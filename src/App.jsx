import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './header'
import Card from './Card'
import { cards } from './data'
import Navigation from './Navigation'
import './App.css'

export default ({ children, text }) => {
  return (
    <div className="App">
      <section className="HeaderBox">
        React Playground
        {/* <Header isBackButtonVisible>Home</Header>
        <Header isBackButtonVisible>Settings</Header>
        <Header isBackButtonVisible>Profile</Header> */}
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
            tags,
          }) => (
            <Card
              key={id}
              title={title}
              question={question}
              answer={answer}
              isAnswerVisible={isAnswerVisible}
              isBookmarkActive={isBookmarkActive}
              tags={tags}
            />
          )
        )}
      </section>

      {/* <section className="PaginationBox">
        <Pagination isLeftDisabled text={' ' + '1/34'} />
        <Pagination text={' ' + '2/34'} />
        <Pagination isRightDisabled text="34/34" />
      </section> */}

      {/* <section className="ButtonBox">
        <Button>Moin there</Button>
      </section> */}

      <section className="NavigationBox">
        <Navigation>Home</Navigation>
        <Navigation>About</Navigation>
        <Navigation>Imprint</Navigation>
      </section>
    </div>
  )
}
