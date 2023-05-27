import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/user/retister";
import Login from "./pages/user/login";
import ReadAll from "./pages/item/readAll";
import ReadSingle from "./pages/item/readSingle";
import Create from "./pages/item/create";
import Update from "./pages/item/update";
import Delete from "./pages/item/delete";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
			  <Routes>
					<Route path="/user/register" element={<Register />} />
					<Route path="/user/login" element={<Login />} />
					<Route path="/" element={<ReadAll />} />
					<Route path="/item/:id" element={<ReadSingle />} />
					<Route path="/item/create" element={<Create />} />
					<Route path="/item/update/:id" element={<Update />} />
					<Route path="/item/delete/:id" element={<Delete />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);

};

export default App;
