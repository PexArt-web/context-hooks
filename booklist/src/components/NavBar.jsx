import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const NavBar = () => {
    const { books } = useContext(BookContext)
  return (
    <div className='navbar'>
      <h1> BookWorm Reading List </h1>
      <p>currently you have {books.length} books to get through ...</p>
    </div>
  )
}

export default NavBar
