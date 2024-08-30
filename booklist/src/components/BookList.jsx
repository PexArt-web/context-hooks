import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import BookDetails from "./BookDetails"


const BookList = () => {
    const {books} = useContext(BookContext)
  return books.length ? (
    <div>
        {books.map(book => (
            <BookDetails book={book} key={book.id}/>
        ) )}
          
    </div>
  ):(
    <div className="empty">No books to read. Hello free time</div>
  )
}

export default BookList
