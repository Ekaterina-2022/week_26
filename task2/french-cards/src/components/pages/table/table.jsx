import React, { useState } from "react";
import words from "../words_list";
import styles from "./table.css";
import TableHeader from "./table-header";
import TableRow from "./table-row";
import TableRowAdd from "./table-row-add";

export default function Table() {
	const [arr, setArr] = useState(words);
	const [editIndex, setEditIndex] = useState(null);
	const [value, setValue] = useState("");

	const handleDelete = (id) => {
		const newArr = arr.filter((word) => word.id !== id);
		setArr(newArr);
	};

	const handleEditItem = (id) => {
		setEditIndex(id);
	};

	const handleSaveEdited = (
		id,
		editedWord,
		editedtranscription,
		editedtranslation
	) => {
		const newItem = arr.map((word) => {
			if (word.id === id) {
				return {
					...word,
					word: editedWord,
					transcription: editedtranscription,
					translation: editedtranslation,
				};
			}
			return word;
		});
		setArr(newItem);
		setEditIndex(null);
		console.log(newItem);
	};

	return (
		<div className={styles.container}>
			<table className={styles.table_wrapper}>
				<TableHeader></TableHeader>
				<tbody>
					{arr.map((word) => (
						<TableRow
							key={word.id}
							id={word.id}
							word={word.word}
							transcription={word.transcription}
							translation={word.translation}
							theme={word.theme}
							handleDelete={handleDelete}
							handleEditItem={handleEditItem}
							handleSaveEdited={handleSaveEdited}
							//editedWord={editedWord}
						/>
					))}
					<TableRowAdd setArr={setArr} arr={arr}></TableRowAdd>
				</tbody>
			</table>
		</div>
	);
}
