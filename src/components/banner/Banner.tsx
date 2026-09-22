import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-orange-50 to-pink-50">
                <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-24 m-20">

                    {/* Left Content */}
                    <div className="max-w-xl text-center lg:text-left">
                        <span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
                            Explore Modern Technologies
                        </span>

                        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Explore Technologies.
                            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                Build Your Future.
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Discover modern technologies, explore powerful tools, and
                            build your personalized technology stack to grow your
                            development skills.
                        </p>

                        <button className="mt-8 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            Explore Technologies
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="mt-12 flex justify-center lg:mt-0 lg:w-1/2">
                        <Image src='/hero_img.jpg' height={400} width={450} alt='Hero image' />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;