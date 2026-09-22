import BooksGridPage from './books-grid';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Listed Books',
  description: 'Read more, Learn more',
}


const ListedBooks = () => {

    return (
        <div>
            <BooksGridPage />
        </div>
    );
};

export default ListedBooks;