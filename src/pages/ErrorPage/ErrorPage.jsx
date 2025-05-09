import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<>
			<p className="text-xl">
				Oh no! The Website <em>crashed</em>! There is an <em>Error</em>!<br />
				If you are a <span className="font-semibold">Developer</span>, then check the{" "}
				<em>Console</em> and figure out the problem!
				<br />
				If you are a <span className="font-semibold">Visitor</span>, you can contact the{" "}
				<a
					href="mailto:mahnaf125@gmail.com"
					target="_blank"
					className="underline underline-offset-1 text-green-900"
				>
					support team
				</a>{" "}
				of the website. Or you can listen to{" "}
				<a
					href="https://www.youtube.com/watch?v=ZqeCjnEI4b0"
					target="_blank"
					className="underline underline-offset-1 text-green-900"
				>
					this
				</a>{" "}
				and relax!
				<br />
				And you can go back to{" "}
				<Link
					to="/"
					className="underline underline-offset-1 text-green-900"
				>
					home page
				</Link>{" "}
				if you wish!
			</p>
		</>
	);
};

export default ErrorPage;
