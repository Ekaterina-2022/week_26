import React, { useState } from "react";
import styles from "./table-row.css";
import ButtonDelete from "../../common/button_del";
import ButtonSave from "../../common/button_save";
import TableCell from "./table-cell";
import ButtonEdit from "../../common/button_edit";

function TableRow(props) {
	const { word, transcription, translation, theme, id } = props;
	const [editButton, setShownEditButton] = useState(true);
	const [readOnlyCell, setReadOnlyCell] = useState(true);

	/*const readOnlyHandle = () => {
		setReadOnlyCell(!readOnlyCell);
	};*/

	const editHandles = () => {
		setShownEditButton(!editButton);
		props.handleEditItem(id);
	};

	return (
		<tr className={styles.table__row} key={word.id}>
			<TableCell state={word} readOnlyCell={readOnlyCell}></TableCell>
			<TableCell
				state={transcription}
				readOnlyCell={readOnlyCell}
			></TableCell>
			<TableCell
				state={translation}
				readOnlyCell={readOnlyCell}
			></TableCell>
			<TableCell state={theme} readOnlyCell={readOnlyCell}></TableCell>
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
					<ButtonSave />
				)}
			</td>
		</tr>
	);
}

export default TableRow;
