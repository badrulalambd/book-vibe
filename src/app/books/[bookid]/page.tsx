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
        <div className="container mx-auto px-4 py-16 md:px-6 lg:py-20 mt-15">
            <div className="group overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">

                {/* Main Card Layout */}
                <div className="flex flex-col sm:flex-row">

                    {/* ==================== Book Image ==================== */}
                    <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 p-6 sm:w-2/5 lg:p-8">

                        {/* Decorative Background */}
                        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-200/40 blur-3xl transition-all duration-500 group-hover:scale-125" />

                        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-orange-200/40 blur-3xl" />

                        {/* Book Image */}
                        <div className="relative z-10 flex h-72 w-full items-center justify-center sm:h-80 lg:h-96">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                className="object-contain p-2 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                    {/* ==================== Book Content ==================== */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">

                        {/* Category + Rating */}
                        <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full border border-pink-100 bg-pink-50 px-3.5 py-1.5 text-xs font-bold text-pink-600">
                                {book.category}
                            </span>

                            <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-bold text-gray-800">
                                <span className="text-yellow-500">★</span>
                                {book.rating}
                            </div>
                        </div>

                        {/* Book Title */}
                        <h2 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-pink-600 lg:text-3xl">
                            {book.bookName}
                        </h2>

                        {/* Author */}
                        <p className="mt-2 text-sm text-gray-500">
                            Written by{" "}
                            <span className="font-semibold text-gray-800">
                                {book.author}
                            </span>
                        </p>

                        {/* Review */}
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                            {book.review}
                        </p>

                        {/* Book Information */}
                        <div className="my-5 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-100 py-5 sm:grid-cols-4">

                            {/* Pages */}
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Pages
                                </p>

                                <p className="mt-1 font-bold text-gray-800">
                                    {book.totalPages}
                                </p>
                            </div>

                            {/* Published */}
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Published
                                </p>

                                <p className="mt-1 font-bold text-gray-800">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            {/* Publisher */}
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Publisher
                                </p>

                                <p
                                    className="mt-1 truncate font-bold text-gray-800"
                                    title={book.publisher}
                                >
                                    {book.publisher}
                                </p>
                            </div>

                            {/* Rating */}
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                    Rating
                                </p>

                                <p className="mt-1 font-bold text-gray-800">
                                    {book.rating} / 5
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {book.tags.slice(0, 2).map((tag: string) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <ReadButtonPage book={book} />
                            <WishlistButtonPage book={book} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;