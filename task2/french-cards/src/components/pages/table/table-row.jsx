import React, { useState } from "react";
import styles from "./table-row.css";
import ButtonDelete from "../../common/button_del";
import ButtonSave from "../../common/button_save";
import TableCell from "./table-cell";
import ButtonEdit from "../../common/button_edit";

function TableRow(props) {
	const { word, transcription, translation, theme, id, editedWord } = props;
	const [editButton, setShownEditButton] = useState(true);
	const [readOnlyCell, setReadOnlyCell] = useState(true);
	const [isRecievedWord, setRecievedWord] = useState(true);
	const [wordErrors, setErrors] = useState({});

	/*const readOnlyHandle = () => {
		setReadOnlyCell(!readOnlyCell);
	};*/

	/*const handleValidation = (editedWord) => {
		let errors = {};
		let cellIsValid = true;

		if (editedWord === false || editedWord === "") {
			cellIsValid = false;
			errors = "Cannot be empty";
		}
		setErrors(errors);
		return cellIsValid;
	};*/

	const editHandles = () => {
		setShownEditButton(!editButton);
		setReadOnlyCell(!readOnlyCell);
		props.handleEditItem(id);
	};

	const editSaveHandles = () => {
		/*if (handleValidation()) {
			console.log("validation successful");
		} else {
			console.log("validation failed");
		}*/

		setShownEditButton(!editButton);
		setReadOnlyCell(!readOnlyCell);
		props.handleSaveEdited();
		console.log(word);
	};

	return (
		<tr className={styles.table__row} key={word.id}>
			<TableCell
				state={word}
				readOnlyCell={readOnlyCell}
				isRecievedWord={isRecievedWord}
			></TableCell>
			<TableCell
				state={transcription}
				readOnlyCell={readOnlyCell}
				isRecievedWord={isRecievedWord}
			></TableCell>
			<TableCell
				state={translation}
				readOnlyCell={readOnlyCell}
				isRecievedWord={isRecievedWord}
			></TableCell>
			<TableCell
				state={theme}
				readOnlyCell={readOnlyCell}
				isRecievedWord={isRecievedWord}
			></TableCell>
			<td>
				<ButtonDelete
					onClick={() => {
						props.handleDelete(id);
					}}
				>
					delete
				</ButtonDelete>
				{editButton ? (
					<ButtonEdit onClick={editHandles} />
				) : (
					<ButtonSave onClick={editSaveHandles} />
				)}
			</td>
		</tr>
	);
}

export default TableRow;
