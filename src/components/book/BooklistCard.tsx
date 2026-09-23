import Image from "next/image";

interface IBookProp {
    book: IBookType;
}

const BooklistCard = ({ book }: IBookProp) => {
    return (
        <div className="my-5 group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">

            {/* Book Image */}
            <div className="flex w-full shrink-0 items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 p-5 sm:w-2/5">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={180}
                    height={240}
                    className="h-56 w-auto rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Book Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Category & Rating */}
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                        {book.category}
                    </span>

                    <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                        <span className="text-yellow-500">★</span>
                        {book.rating}
                    </div>
                </div>

                {/* Book Name */}
                <h2 className="mt-3 text-xl font-bold text-gray-900">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    By{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                    {book.review}
                </p>

                {/* Book Information */}
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

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {book.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <button className="mt-5 w-fit rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    View Details →
                </button>
            </div>
        </div>
    );
};

export default BooklistCard;