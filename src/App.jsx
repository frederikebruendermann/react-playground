import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './header'
import Card from './Card'

export default ({ children, text }) => {
  return (
    <div>
      <section className="HeaderBox">
        <Header isBackButtonVisible>Home</Header>
        <Header isBackButtonVisible>Settings</Header>
        <Header isBackButtonVisible>Profile</Header>
      </section>
      <section className="CardBox">
        <Card isActive></Card>
        <Card></Card>
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
