import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput, } from "react-admin";
import { useContext } from 'react'
import { EnglishContext } from "../../context/EnglishContext";




export const QuestionsList = (props) => {

    const { newdata } = useContext(EnglishContext)
    const postFilters = [
        <TextInput label="Filter by category" source="q" alwaysOn />,
    ];

    return (
       
            <List {...props} filters={postFilters} className="mt-1">
                <Datagrid rowClick="edit" className="mt-2">
                    <TextField source="id" />
                    <TextField source="question" />
                    <TextField source="option1" />
                    <TextField source="option2" />
                    <TextField source="option3" />
                    <TextField source="option4" />
                    <TextField source="answer" />
                    <TextField source="category" />
                    <EditButton />
                    <DeleteButton mutationMode="pessimistic" />
                </Datagrid>
                <div className="d-flex justify-content-end">
                    <div className="number-question">Number of questions : {newdata.length}</div>
                </div>
            </List>
            )
}
/*
<div className="d-flex justify-content-end">
                <div className="p-5 fw-bold">Number of questions : {newdata.length}</div>
            </div>
*/