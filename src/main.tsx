import React from "react";
import ReactDOM from "react-dom/client";

import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <>Root</>,
		children: [
			{
				index: true,
				element: <>Home</>,
			},
		],
	},
];

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
