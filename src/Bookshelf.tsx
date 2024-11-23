import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Bookshelf = () => {
    const [search, setSearch] = useSearchParams();
    const handleTitle = (e: ChangeEvent<HTMLInputElement>): void => setSearch({title: e.target.value})
    const byTitle = 
    (title: any) =>
    (book: { title: string; }) => 
    book.title.toLowerCase().includes((title || "").toLowerCase());

  const books = [
    { title: "The Road to Rust", isCompleted: false },
    { title: "The Road to React", isCompleted: true },
  ];

  const inputData: string = search.get("title") || "";

  return (
    <>
      <h2>Bookshelf</h2>

      <input type="text" value={inputData} onChange={handleTitle}/>

      <ul>
        {books.filter(byTitle(search.get("title"))).map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Bookshelf