import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

type DecodedType = {
	email: string;
};

const useAuth = () => {

	const navigate = useNavigate();
	const [loginUser, setLoginUser] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			navigate("/user/login");
		}

		try {
			if (token) {
				const decoded: DecodedType = jwt_decode(token);
				setLoginUser(decoded.email);
			} else {
				navigate("/user/login");
			}
		} catch (error) {
			navigate("/user/login");
		}
	}, [navigate]);

	return loginUser;

};

export default useAuth;
