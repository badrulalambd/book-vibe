import BookCard from '@/components/book/BookCard';
import React from 'react';

const getBooks = async () => {
    const response = await fetch('http://localhost:3000//booksData.json');
    const books = await response.json();
    return books;
}

const BooksPage = async () => {

    const booksdata = await getBooks();
    console.log("Books Data : ", booksdata);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
            {
                booksdata.map((book: IBookType) => <BookCard
                    key={book.bookId}
                    book={book}
                />)
            }
        </div>
    );
};

export default BooksPage;