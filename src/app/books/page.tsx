import BookCard from '@/components/book/BookCard';
import React from 'react';

const getBooks = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const books = await response.json();
        return books;
    }catch(error){
        console.error("Error to fetch data: ", error);
        return [];
    }
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