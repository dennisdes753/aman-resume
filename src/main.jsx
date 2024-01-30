import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import Homepage from './Pages/Homepage/homepage'
import About from './Pages/About/about'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
