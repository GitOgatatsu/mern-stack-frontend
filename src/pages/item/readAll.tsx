import { useState } from "react";

type ItemType = {
//	_id: string;
//	title: string;
//	image: string;
//	price: string;
//	description: string;
};

type AllItemsType = {
	allItems: ItemType[];
};

const ReadAll = () => {

	const [allItems, setAllItems] = useState<AllItemsType>({allItems: []});

	const getAllItems = async () => {
		const response = await fetch("http://localhost:5000");
		const jsonResponse: AllItemsType = await response.json();
		setAllItems(jsonResponse);
	};

	return (
		<>
			<h1>すべてのアイテムデータ</h1>
			{allItems && allItems.allItems.map(item => console.log(item))}
			<button onClick={getAllItems}>全データ取得</button>
		</>

	);

};

export default ReadAll;
