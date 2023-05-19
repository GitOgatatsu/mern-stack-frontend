import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeleteItemItem = () => {

	const params = useParams();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		const getSingleItem = async () => {
			const response = await fetch(`http://localhost:5000/item/read/${params.id}`);
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			setTitle(jsonResponse.singleItem.title);
			setPrice(jsonResponse.singleItem.price);
			setImage(jsonResponse.singleItem.image);
			setDescription(jsonResponse.singleItem.description);
		};
		getSingleItem();
	}, [params.id]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:5000/item/delete/${params.id}`, {
				method: "DELETE",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"authorization": `Bearer ${localStorage.getItem("token")}`
				}
			});
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
		} catch (err) {
			alert("アイテム削除失敗");
		}
	};

	return (
		<>
			<h1>アイテム削除</h1>
			<form onSubmit={handleSubmit}>
				<h2>{title}</h2>
				{image && <img src={require(`../../images${image}`)} alt="item" />}
				<h3>¥{price}</h3>
				<p>{description}</p>
				<button>削除</button>
			</form>
		</>
	);

};

export default DeleteItemItem;