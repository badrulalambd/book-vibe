import Banner from "@/components/banner/Banner";
import BooksPage from "./books/page";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <BooksPage />
      
    </div>
  );
}
