import React, { useState } from "react";
import words from "./words_list";
import styles from "./table.css";
import TableHeader from "./table-header";
import TableRow from "./table-row";



export default function Table() {
	const [arr, setArr] = useState(words);
	const [editIndex, setEditIndex] = useState(null);
	
    const handleDelete = (id) => {
      const newArr = arr.filter((word) => word.id !== id);
      setArr(newArr);
    };
	console.log('props obj:', {handleDelete});
	
	return (
		<div className={styles.container}>
			<table className={styles.table_wrapper}>
			<TableHeader></TableHeader>
			<tbody>
			{words.map((word) => <TableRow
			key={word.id} word={word.word} transcription={word.transcription} translation={word.translation} theme={word.theme} handleDelete={handleDelete}/>)}
			</tbody>
			</table>
		</div>
	);
}
