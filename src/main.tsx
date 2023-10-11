import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";

// Routes
import Root from "/@routes/root";
import Home from "/@routes/home";

// Route Object
const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
];

// Router
const router = createBrowserRouter(routes, {
	future: {
		v7_normalizeFormMethod: true,
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
