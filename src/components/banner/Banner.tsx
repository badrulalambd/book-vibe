import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        // <div>
        //     <section className="bg-linear-to-r from-orange-50 to-pink-50">
        //         <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-24 m-20">

        //             {/* Left Content */}
        //             <div className="max-w-xl text-center lg:text-left">
        //                 <span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
        //                     Read more, Learn more
        //                 </span>

        //                 <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
        //                     Books to Freshen up
        //                     <span className="block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        //                         Your Bookshelf
        //                     </span>
        //                 </h1>

        //                 <button className="mt-8 rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        //                     View The List
        //                 </button>
        //             </div>

        //             {/* Right Image */}
        //             <div className="mt-12 flex justify-center lg:mt-0 lg:w-1/2">
        //                 <Image src='/hero_img.jpg' height={400} width={450} alt='Hero image' />
        //             </div>

        //         </div>
        //     </section>
        // </div>

        <div className='relative overflow-hidden pt-15 my-20'>
            <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-pink-50">
                {/* Decorative background shapes */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

                <div className="container relative mx-auto flex flex-col items-center gap-12 px-6 py-16 sm:py-20 lg:flex-row lg:justify-between lg:gap-16 lg:py-24">

                    {/* Left Content */}
                    <div className="max-w-2xl text-center lg:text-left">

                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm backdrop-blur-sm">
                            <span className="text-base">📚</span>
                            Read more, learn more
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                            Books to Freshen Up
                            <span className="mt-2 ml-2 bg-linear-to-r from-orange-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                                Your Bookshelf
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
                            Discover inspiring stories, timeless classics, and exciting
                            new reads to make your bookshelf more meaningful.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">

                            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/50">
                                View The List
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                            <button className="rounded-xl border border-gray-200 bg-white/80 px-7 py-3.5 font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:text-pink-600 hover:shadow-md">
                                Explore Categories
                            </button>

                        </div>

                        {/* Small Stats */}
                        <div className="mt-10 flex items-center justify-center gap-8 border-t border-gray-200/70 pt-6 lg:justify-start">
                            <div>
                                <p className="text-xl font-bold text-gray-900">100+</p>
                                <p className="text-xs text-gray-500">Books</p>
                            </div>

                            <div className="h-8 w-px bg-gray-200" />

                            <div>
                                <p className="text-xl font-bold text-gray-900">50+</p>
                                <p className="text-xs text-gray-500">Authors</p>
                            </div>

                            <div className="h-8 w-px bg-gray-200" />

                            <div>
                                <p className="text-xl font-bold text-gray-900">10+</p>
                                <p className="text-xs text-gray-500">Categories</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex w-full justify-center lg:w-1/2">

                        {/* Image Glow */}
                        <div className="absolute inset-10 rounded-full bg-linear-to-r from-orange-300/30 to-pink-300/30 blur-3xl" />

                        {/* Image Card */}
                        <div className="relative rounded-3xl border border-white/80 bg-white/50 p-3 shadow-2xl shadow-pink-200/40 backdrop-blur-sm">
                            <Image
                                src="/hero_img.jpg"
                                width={550}
                                height={450}
                                alt="A collection of beautiful books"
                                className="h-auto w-full max-w-lg rounded-2xl object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-2 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-left-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-lg">
                                    📖
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Your next
                                    </p>
                                    <p className="text-sm font-bold text-gray-900">
                                        Great Read
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;