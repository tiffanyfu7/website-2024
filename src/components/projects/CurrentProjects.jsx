import React from 'react'
import { CurrentPoints, readingList } from '../../Contents'

export const CurrentProjects = () => {
  const books = readingList
  return (
    <>
      <h2 style={{marginBottom: "-10px"}}>What I'm Up To</h2>
      <CurrentPoints />
      
      {/* <h4>Currently Getting Inspiration From</h4>
      {books.map((book) => {
        return (
          <p><em>{book.title}</em> by {book.author}</p>
        )})
      } */}
    </>
  )
}