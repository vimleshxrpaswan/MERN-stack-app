// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/books/create" element={<CreateBook />} />
			<Route path="/books/details/:id" element={<ShowBook />} />
			<Route path="/books/edit/:id" element={<EditBook />} />
			<Route path="/books/delete/:id" element={<DeleteBook />} />
		</Routes>
	);
}

export default App;
