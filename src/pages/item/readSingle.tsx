import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSingleItem = () => {

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

	return (
		<>
			<div>
				{image && <img src={require(`../../images${image}`)} alt="item"/>}
			</div>
			<div>
				<h1>{title}</h1>
				<h2>¥{price}</h2>
				<hr />
				<p>{description}</p>
			</div>
		</>
	);

};

export default ReadSingleItem;
