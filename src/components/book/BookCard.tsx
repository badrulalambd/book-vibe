import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BooksProp {
    book: IBookType;
}

const BookCard = ({ book }: BooksProp) => {
    return (
        <div>
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Book Cover */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50 p-6">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={180}
                        height={240}
                        className="h-full w-auto rounded-md object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pink-600 shadow-sm">
                        {book.category}
                    </span>

                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm">
                        <span className="text-yellow-500">★</span>
                        {book.rating}
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        by <span className="font-medium text-gray-700">{book.author}</span>
                    </p>

                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
                        {book.review}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
                        <div>
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Publisher</p>
                            <p className="mt-1 truncate font-semibold text-gray-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Rating</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.rating} / 5
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <Link href={`/books/${book.bookId}`}>
                        <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            View Book Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;