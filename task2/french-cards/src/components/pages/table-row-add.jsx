import React, { useState } from "react";
import words from "./words_list";
import styles from "./table-row-add.css";
import ButtonEdit from "../common/button_edit";
import TableCell from "./table-cell";
import ButtonAdd from "../common/button_add"

export default function TableRowAdd (props) {
    const {
        word,
        transcription,
        translation,
        theme,
    } = props;

    return (
        <tr className={styles.table__row_add}>
          <TableCell item={word}></TableCell>
          <TableCell item={transcription}></TableCell>
          <TableCell item={translation}></TableCell>
          <TableCell item={theme}></TableCell>
          <td><ButtonAdd onClick={() => {props.handleAddWord()}} ></ButtonAdd></td>
        </tr>
      )

}