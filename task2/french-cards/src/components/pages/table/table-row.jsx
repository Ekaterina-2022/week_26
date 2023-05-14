import React, { useState } from "react";
import styles from "./table-row.css";
import ButtonDelete from "../../common/button_del";
import ButtonSave from "../../common/button_save";
import TableCell from "./table-cell";
import ButtonEdit from "../../common/button_edit";



function TableRow (props){
  
    const {
        word,
        transcription,
        translation,
        theme,
        id
    } = props;


    
    return (
      <tr className={styles.table__row} key={word.id}  >
        <TableCell state={word}></TableCell>
        <TableCell state={transcription}></TableCell>
        <TableCell state={translation}></TableCell>
        <TableCell state={theme}></TableCell>
        <td><ButtonDelete onClick={() => {props.handleDelete(id)}}>delete</ButtonDelete>
        <ButtonEdit onClick={() => {props.handleEditItem(id)}}/>
        </td>
      </tr>
    )
  };

  export default TableRow