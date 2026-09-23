'use client'

import { BookContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

interface IBookProp {
    book: IBookType
}

const ReadButtonPage = ({ book }: IBookProp) => {

    const value = useContext(BookContext);
    const { readBook, setReadBook } = value;

    const handleReadBook = () => {
        setReadBook([...readBook, book]);
        toast.success('Marked as read!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    return (
        <div>
            <button onClick={handleReadBook} className="btn btn-secondary">Mark As Read</button>
        </div>
    );
};

export default ReadButtonPage;