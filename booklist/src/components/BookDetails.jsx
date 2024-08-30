import  { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({book}) => {
    const { dispatch } =  useContext(BookContext)
    
  return (
    <div className='book-list'>
      <ul>
        <li onClick={()=>(dispatch({type: 'REMOVE_BOOK', id: book.id}))} >
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
            <div className="publication">{book.publicationYear}</div>
        </li>
      </ul>
    </div>
  )
}

export default BookDetails
