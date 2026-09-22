import Banner from "@/components/banner/Banner";
import BooksPage from "./books/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Vibe',
  description: 'Read more, Learn more',
}

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <BooksPage />
      
    </div>
  );
}
