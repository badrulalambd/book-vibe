'use client'

import { BookContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

interface IBookProp {
    book: IBookType
}

const ReadButtonPage = ({book} : IBookProp) => {

    const value = useContext(BookContext);
    const {readBook, setReadBook} = value;

    const handleReadBook = () => {
        setReadBook([...readBook, book]);
        console.log("ReadBook Data: ", readBook);
    }

    return (
        <div>
            <button onClick={handleReadBook} className="btn btn-secondary">Read</button>
        </div>
    );
};

export default ReadButtonPage;