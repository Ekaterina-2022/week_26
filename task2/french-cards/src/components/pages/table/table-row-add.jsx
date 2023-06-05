import React, { useState } from "react";
import words from "../words_list";
import styles from "./table-row-add.css";
import ButtonEdit from "../../common/button_edit";
import TableCell from "./table-cell";
import ButtonAdd from "../../common/button_add";

export default function TableRowAdd(props) {
	const { arr, setArr } = props;
	const [english, setEnglish] = useState("");
	const [transcription, setTranscription] = useState("");
	const [translation, setTranslation] = useState("");
	const [theme, setTheme] = useState("");
	const [isReadOnlyAddedWord, setAddedWord] = useState(false);

	const handleAddWord = () => {
		const newWord = {
			id: arr.length + 1,
			word: english,
			transcription: transcription,
			translation: translation,
			theme: theme,
		};
		setArr([...arr, newWord]);
		setEnglish("");
		console.log(newWord);
		console.log(english);
	};

	return (
		<tr className={styles.table__row_add}>
			<TableCell
				setState={setEnglish}
				isAddedWord={isReadOnlyAddedWord}
			></TableCell>
			<TableCell
				setState={setTranscription}
				isAddedWord={isReadOnlyAddedWord}
			></TableCell>
			<TableCell
				setState={setTranslation}
				isAddedWord={isReadOnlyAddedWord}
			></TableCell>
			<TableCell
				setState={setTheme}
				isAddedWord={isReadOnlyAddedWord}
			></TableCell>
			<td>
				<ButtonAdd
					onClick={() => {
						handleAddWord();
					}}
				></ButtonAdd>
			</td>
		</tr>
	);
}
