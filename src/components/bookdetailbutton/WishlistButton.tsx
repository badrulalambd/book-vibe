'use client'


import { BookContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { createContext } from 'vm';

interface IBookProp {
    book: IBookType;
}

const WishlistButtonPage = ({book} : IBookProp) => {

    const value = useContext(BookContext);
    const {wishlist, setWishlist} = value;

    const handleWishlist = () => {
        setWishlist([...wishlist, book]);
        console.log("Wishlist Data: ", wishlist);
    }
    

    return (
        <div>
            <button onClick={handleWishlist} className="btn btn-success">Add to Wishlist</button>
        </div>
    );
};

export default WishlistButtonPage;