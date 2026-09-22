'use client'

import BooklistCard from '@/components/book/BooklistCard';
import { BookContext } from '@/context/ThemeContext';
import { useContext, useState } from 'react';

const BooksGridPage = () => {
     const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
    
        const value = useContext(BookContext);
        const { readBook, wishlist } = value;
    
        const sortBooks = (books : IBookType[]) => {
    
            const sortedBooks = [...books];
            if(sortBy=="rating"){
                sortedBooks.sort((a,b) => b.rating-a.rating);
            }
            else if(sortBy == "pages") {
                sortedBooks.sort((a,b) => a.totalPages-b.totalPages);
            }
            else{
                sortedBooks.sort((a,b) => a.yearOfPublishing-b.yearOfPublishing);
            }
            return sortedBooks;
        }
    
        const sortedReadBooks = sortBooks(readBook);
        const sortedWishlistBooks = sortBooks(wishlist);
    return (
        <div className='container mx-auto m-20 rounded-sm flex flex-col gap-10'>
            <div className='bg-gray-200 mt-15 p-20'>
                <h1 className='text-4xl font-bold text-black text-center'>Books</h1>
            </div>

            <div className='text-center'>
                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}>
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Published Year</option>
                </select>
            </div>

            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            sortedReadBooks.length > 0 ?
                                sortedReadBooks.map(book => <BooklistCard
                                    key={book.bookId}
                                    book={book}
                                />) :
                                <p>No book is read yet!!!</p>
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            sortedWishlistBooks.length > 0 ?
                                sortedWishlistBooks.map(book => <BooklistCard
                                    key={book.bookId}
                                    book={book}
                                />) :
                                <p>No book is in the wishlist!!!</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BooksGridPage;