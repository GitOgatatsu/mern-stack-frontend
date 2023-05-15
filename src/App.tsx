import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/user/retister";
import Login from "./pages/user/login";
import ReadAll from "./pages/item/readAll";
import ReadSingle from "./pages/item/readSingle";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/user/register" element={<Register />} />
				<Route path="/user/login" element={<Login />} />
				<Route path="/" element={<ReadAll />} />
				<Route path="/item/:id" element={<ReadSingle />} />
			</Routes>
		</BrowserRouter>
	);

};

export default App;
