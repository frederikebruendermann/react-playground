import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'

export default ({ children, text }) => {
  return (
    <div>
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="2/34" />
      <Pagination isRightDisabled text="34/34" />
      <Button>Moin there</Button>
    </div>
  )
}
