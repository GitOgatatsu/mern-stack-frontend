import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ItemType = {
	_id: string;
	title: string;
	image: string;
	price: string;
	description: string;
};

type AllItemsType = {
	allItems: ItemType[];
};

const ReadAll = () => {

	const [allItems, setAllItems] = useState<AllItemsType>({allItems: []});


	useEffect(() => {
		const getAllItems = async () => {
			const response = await fetch("http://localhost:5000");
			const jsonResponse: AllItemsType = await response.json();
			setAllItems(jsonResponse);
		};
		getAllItems();
	}, []);

	return (
		<>
			<div>
			{allItems && allItems.allItems.map(item =>
				<Link to={`/item/${item._id}`} key={item._id}>
					<img src={require(`../../images${item.image}`)} alt="item" />
					<div>
						<h2>{item.price}</h2>
						<h3>{item.title}</h3>
						<p>{item.description.substring(0, 80)}</p>
					</div>
				</Link>
			)}
			</div>
		</>

	);

};

export default ReadAll;
