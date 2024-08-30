import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext"


const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [ author, setAuthor] = useState('')
    const [publicationYear , setPublicationYear] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(author, title);
        dispatch({type: 'ADD_BOOK', book:{
          title, author,  publicationYear 
        }})
        setAuthor('')
        setTitle('')
        setPublicationYear('')
        
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value) } required placeholder="The world goes around"/>
      <input type="text" name="author" value={author} onChange={(e)=>setAuthor(e.target.value) } required placeholder="author" />
      <input type="text" name="publicationYear" value={publicationYear} onChange={(e)=>setPublicationYear(e.target.value)} placeholder="1999" required/>

      <input type="submit" value={'Add book'} />
    </form>
  )
}

export default BookForm
