import Hero from "../../components/Hero/Hero";
import PopularBooks from "../../components/PopularBooks/PopularBooks";

const Home = () => {
	return (
		<main className="space-y-24">
			<Hero></Hero>
			<PopularBooks></PopularBooks>
		</main>
	);
};

export default Home;
