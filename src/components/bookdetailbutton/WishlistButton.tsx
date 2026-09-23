'use client'


import { BookContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';
import { createContext } from 'vm';

interface IBookProp {
    book: IBookType;
}

const WishlistButtonPage = ({book} : IBookProp) => {

    const value = useContext(BookContext);
    const {wishlist, setWishlist} = value;

    const handleWishlist = () => {
        setWishlist([...wishlist, book]);
        toast.success('Marked as read!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    

    return (
        <div>
            <button onClick={handleWishlist} className="btn btn-success">Add to Wishlist</button>
        </div>
    );
};

export default WishlistButtonPage;