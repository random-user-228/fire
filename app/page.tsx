'use client';
import BooksList from "./components/books_list";
import FireCalendar from "./components/calendar";

export default function Home() {
  return (
    <>
    <FireCalendar />
    <BooksList />
    </>
  );
}
