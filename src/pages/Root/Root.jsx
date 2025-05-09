import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<>
			<header>
				<Navbar></Navbar>
			</header>
			<Outlet></Outlet>
		</>
	);
};

export default Root;
