import React, { useState } from "react";
import styles from "./table-row.css";
import ButtonDelete from "../common/button_del";
import ButtonSave from "../common/button_save";
import TableCell from "./table-cell";
import ButtonEdit from "../common/button_edit";


function TableRow (props){
  //console.log('props obj:', props.handleDelete);
    const {
        word,
        transcription,
        translation,
        theme,
        id
    } = props;
    
    return (
      <tr className={styles.table__row} key={word.id}  >
        <TableCell item={word}></TableCell>
        <TableCell item={transcription}></TableCell>
        <TableCell item={translation}></TableCell>
        <TableCell item={theme}></TableCell>
        <td><ButtonDelete onClick={() => {props.handleDelete(id)}}>delete</ButtonDelete></td>
      </tr>
    )
  };

  export default TableRow