import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const PopularBooks = () => {
	const books = useLoaderData();
	return (
		<section className="space-y-9">
			<h2 className="text-4xl font-bold text-center">Popular Books</h2>
			<div className="grid grid-cols-4 gap-6">
				{books.map((book) => (
					<BookCard
						key={book.bookId}
						book={book}
					/>
				))}
			</div>
		</section>
	);
};

export default PopularBooks;
