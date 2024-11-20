import { useState } from 'react';

const Bookshelf = () => {
    // define state
    const [books, setBooks] = useState([
        {
            title: 'Shutter Island',
            author: 'Dennis Lehane'
        },
        {
            title: 'The Violence: A Novel',
            author: 'Delilah S. Dawson',
        }
    ])
    const [newBook, setNewBook] = useState([
        {
            title: '',
            author: '',
        }
    ])

    // create event handlers
    const handleInputChange = (event) => { // Create a function named handleInputChange that will be triggered each time the user types in an input field. The function should take an event object as its argument. Use this event to access the name of the input field and the value the user has typed.
        setNewBook({...books, [event.target.name]: event.target.value}) // Construct a new version of the newBook object that includes the updated fields. Make sure you maintain the values of other fields in newBook that aren’t currently being updated. (Hint: Use the spread operator ... to create a new copy of the newBook object). Use the setNewBook setter function to update the state of newBook with this new object to reflect the changes in your UI.
    }
    const handleSubmit = (event) => { // Create a function named handleSubmit that will execute when the form is submitted. The function should also take an event object as its argument. 
        event.preventDefault() //  Begin the function by stopping the default form submission action using event.preventDefault().
        setBooks({...books}) // Use the setBooks setter function to update the books array state with this new list to include the newly added book. You’ll need to copy the current list of books and add the new book details from newBook to this list. (Hint: Use the spread operator ...)
        setNewBook([ // Reset the newBook state to its initial empty values to clear the form fields, preparing them for the next entry.
            {
                title: '',
                author: '',
            }
        ])    
    }
    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input id="title" name="title" value={newBook.title} onChange={handleInputChange} />
                        <br />
                        <label htmlFor="author">Author: </label>
                        <input id="author" name="author" value={newBook.author} onChange={handleInputChange} />
                        <br />
                        <button type="submit">Submit your new book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
            </div>
        </>
    )
}




export default Bookshelf;