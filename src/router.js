import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

export default router;
