import ReadButtonPage from '@/components/bookdetailbutton/ReadButton';
import WishlistButtonPage from '@/components/bookdetailbutton/WishlistButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookDetailProp {
    params: Promise<{
        bookid: string;
    }>
}

const getBooks = async () => {
    const response = await fetch('http://localhost:3000//booksData.json');
    const books = await response.json();
    return books;
}

const BookDetailPage = async ({ params }: IBookDetailProp) => {

    const { bookid } = await params;

    const books = await getBooks();

    const book = books.find((book: IBookType) => String(book.bookId) == String(bookid))

    return (
        <div className='container mx-auto m-20'>
            <div className="group flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Book Image */}
                <div className="flex w-2/5 shrink-0 items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 p-5">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={160}
                        height={220}
                        className="h-52 w-auto rounded-md object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Book Content */}
                <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                            {book.category}
                        </span>

                        <div className="flex items-center gap-1 text-sm font-semibold">
                            <span className="text-yellow-500">★</span>
                            {book.rating}
                        </div>
                    </div>

                    <h2 className="mt-3 line-clamp-2 text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        by <span className="font-medium text-gray-700">{book.author}</span>
                    </p>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                        {book.review}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-3">
                        <div>
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="font-semibold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Publisher</p>
                            <p className="truncate font-semibold text-gray-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Rating</p>
                            <p className="font-semibold text-gray-800">
                                {book.rating} / 5
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.slice(0, 2).map((tag : string) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className='flex gap-3'>
                        <ReadButtonPage book={book} />
                        <WishlistButtonPage book={book} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;