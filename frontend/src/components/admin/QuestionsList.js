import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const QuestionsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="question" />
            <TextField source="option1" />
            <TextField source="option2" />
            <TextField source="option3" />
            <TextField source="option4" />
            <TextField source="answer" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);