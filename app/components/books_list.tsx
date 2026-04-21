export default function BooksList() {
    const dir_path = "books/";
    const books = [
        { id: 1, title: "Наказ 116", src: "116.pdf" },
        { id: 2, title: "Наказ 340", src: "340.pdf" },
    ];
    return (
        <div className="books-list">
            {books.map((book) => (
                <div key={book.id} className="book-item">
                    <a href={`${dir_path}${book.src}`} target="_blank" rel="noopener noreferrer">
                    <p>{book.title}</p></a>
                </div>
            ))}  
        </div>
    );
}   