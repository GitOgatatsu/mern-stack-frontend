import { useState } from "react";



const Register = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log("ABC", name, email, password);
		try {
			 	const response = await fetch("http://localhost:5000/user/register", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password
				})
			});
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
		} catch (err) {
			alert("ユーザ登録失敗");
		}
	};

	return (
		<>
			<h1>ユーザ登録ページ</h1>
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) =>
						setName(e.target.value)
					}
					type="text" name="name" placeholder="名前" required />
				<input value={email} onChange={(e) =>
						setEmail(e.target.value)
					}
					type="text" name="email" placeholder="メールアドレス" required />
				<input value={password} onChange={(e) =>
						setPassword(e.target.value)
					}
					type="text" name="password" placeholder="パスワード" required />
				<button>登録</button>
			</form>
		</>
	);

};

export default Register;
