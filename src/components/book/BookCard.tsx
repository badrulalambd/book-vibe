import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BooksProp {
    book: IBookType;
}

const BookCard = ({ book }: BooksProp) => {
    return (
        // <div>
        //     <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        //         {/* Book Cover */}
        //         <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50 p-6">
        //             <Image
        //                 src={book.image}
        //                 alt={book.bookName}
        //                 width={180}
        //                 height={240}
        //                 className="h-full w-auto rounded-md object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
        //             />

        //             <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pink-600 shadow-sm">
        //                 {book.category}
        //             </span>

        //             <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm">
        //                 <span className="text-yellow-500">★</span>
        //                 {book.rating}
        //             </div>
        //         </div>

        //         {/* Card Content */}
        //         <div className="p-5">
        //             <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
        //                 {book.bookName}
        //             </h2>

        //             <p className="mt-1 text-sm text-gray-500">
        //                 by <span className="font-medium text-gray-700">{book.author}</span>
        //             </p>

        //             <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
        //                 {book.review}
        //             </p>

        //             <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
        //                 <div>
        //                     <p className="text-xs text-gray-400">Pages</p>
        //                     <p className="mt-1 font-semibold text-gray-800">
        //                         {book.totalPages}
        //                     </p>
        //                 </div>

        //                 <div>
        //                     <p className="text-xs text-gray-400">Published</p>
        //                     <p className="mt-1 font-semibold text-gray-800">
        //                         {book.yearOfPublishing}
        //                     </p>
        //                 </div>

        //                 <div>
        //                     <p className="text-xs text-gray-400">Publisher</p>
        //                     <p className="mt-1 truncate font-semibold text-gray-800">
        //                         {book.publisher}
        //                     </p>
        //                 </div>

        //                 <div>
        //                     <p className="text-xs text-gray-400">Rating</p>
        //                     <p className="mt-1 font-semibold text-gray-800">
        //                         {book.rating} / 5
        //                     </p>
        //                 </div>
        //             </div>

        //             <div className="mt-4 flex flex-wrap gap-2">
        //                 {book.tags.slice(0, 3).map((tag) => (
        //                     <span
        //                         key={tag}
        //                         className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
        //                     >
        //                         #{tag}
        //                     </span>
        //                 ))}
        //             </div>

        //             <Link href={`/books/${book.bookId}`}>
        //                 <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        //                     View Book Details
        //                 </button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-100/60">

    {/* Book Cover */}
    <div className="relative flex h-80 items-center justify-center overflow-hidden bg-linear-to-br from-orange-50 via-white to-pink-50 p-7">

        {/* Decorative Blur */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-200/40 blur-3xl transition-all duration-500 group-hover:bg-pink-300/50" />

        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl" />

        {/* Book Image */}
        <Image
            src={book.image}
            alt={book.bookName}
            width={190}
            height={250}
            className="relative z-10 h-64 w-auto rounded-lg object-cover shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
    </div>

    {/* Card Content */}
    <div className="p-6">

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
            {book.tags.slice(0, 3).map((tag) => (
                <span
                    key={tag}
                    className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600 transition-colors duration-300 group-hover:bg-pink-100"
                >
                    #{tag}
                </span>
            ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-2 text-xl font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-pink-600">
            {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1.5 text-sm text-gray-500">
            By{" "}
            <span className="font-semibold text-gray-700">
                {book.author}
            </span>
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* Category + Rating */}
        <div className="mt-5 flex items-center justify-between">

            {/* Category */}
            <span className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600">
                {book.category}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-50 text-sm text-yellow-500">
                    ★
                </span>

                <span className="text-sm font-bold text-gray-800">
                    {book.rating}
                </span>

                <span className="text-xs text-gray-400">
                    / 5
                </span>
            </div>
        </div>

        {/* View Details */}
        <Link
            href={`/books/${book.bookId}`}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 font-semibold text-white shadow-md shadow-orange-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200"
        >
            View Book Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </Link>
    </div>
</div>
        </div>
    );
};

export default BookCard;