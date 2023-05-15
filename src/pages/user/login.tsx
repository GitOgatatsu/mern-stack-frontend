import { useState } from "react";



const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/user/login", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			});
			const jsonResponse = await response.json();
//			console.log(jsonResponse.token);
			localStorage.setItem("token", jsonResponse.token);
			alert(jsonResponse.message);
		} catch (err) {
			alert("ログイン失敗");
		}

	};


	return (
		<>
			<h1>ログイン</h1>
			<form onSubmit={handleSubmit}>
				<input value={email} onChange={(e) =>
						setEmail(e.target.value)
					}
					type="text" name="email" placeholder="メールアドレス" required />
				<input value={password} onChange={(e) =>
						setPassword(e.target.value)
					}
					type="text" name="password" placeholder="パスワード" required />
					<button>ログイン</button>
			</form>
		</>
	);

};

export default Login;
