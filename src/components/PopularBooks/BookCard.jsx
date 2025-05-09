import { StarIcon } from "lucide-react";

const BookCard = ({ book }) => {
	const { bookName, author, image, category, tags, rating } = book;
	return (
		<div className="border border-zinc-400/75 p-6 rounded-3xl space-y-6">
			<div className="bg-zinc-400/20 rounded-3xl p-10">
				<img
					src={image}
					alt={bookName}
					className="w-3/4 aspect-[3/4] mx-auto"
				/>
			</div>
			<div className="space-y-5">
				<div className="space-y-4">
					<h4 className="text-2xl font-bold">{bookName}</h4>
					<p className="text-lg">
						By: <span className="font-medium">{author}</span>
					</p>
					<div className="space-x-2 space-y-2">
						{tags.map((tag, index) => (
							<p
								key={index}
								className="px-4 py-1 bg-zinc-400/20 text-primary font-medium rounded-full inline-block"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
				<div className="border border-dashed border-zinc-400/25"></div>
				<div className="flex justify-between items-center">
					<p className="text-lg font-medium">{category}</p>
					<p className="text-lg font-medium flex items-center gap-x-2">
						{rating}
						<StarIcon
							size={20}
							className="cursor-click"
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
