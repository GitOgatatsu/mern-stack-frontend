import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/user/retister";
import Login from "./pages/user/login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/user/register" element={<Register />} />
				<Route path="/user/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);

};

export default App;
