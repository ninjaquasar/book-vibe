import { createBrowserRouter } from "react-router";
import Root from "./pages/Root/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => fetch("/booksData.json"),
			},
		],
	},
]);

export default router;
