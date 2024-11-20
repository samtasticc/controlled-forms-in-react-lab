import { useState } from 'react';

const Bookshelf = () => {
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
    const [newBook, setNewBooks] = useState([
        {
            title: '',
            author: '',
        }
    ])
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )
}




export default Bookshelf;