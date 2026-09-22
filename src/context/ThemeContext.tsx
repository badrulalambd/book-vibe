'use client'

import React, { createContext, ReactNode, useState } from 'react';



interface IStateType {
    readBook: IBookType[]
    setReadBook: React.Dispatch<React.SetStateAction<IBookType[]>>
    wishlist: IBookType[]
    setWishlist: React.Dispatch<React.SetStateAction<IBookType[]>>
}

export const BookContext = createContext<IStateType>({
    readBook: [], 
    setReadBook: () => {},
    wishlist: [],
    setWishlist: () => {},

});

const ContextProvider = ({children} : {children: ReactNode}) => {

    const [readBook, setReadBook] = useState<IBookType[]>([]);
    const [wishlist, setWishlist] = useState<IBookType[]>([]);

    const shareData = {
        readBook,
        setReadBook,
        wishlist, 
        setWishlist        
    }
    

    return (
        <BookContext.Provider value = {shareData}>{children}</BookContext.Provider>
    );
};

export default ContextProvider;