import * as React from "react";
import { List, Datagrid, TextField, EditButton,DateInput,
   DeleteButton } from "react-admin";


export const ExamList = () => (
    <List>
        <Datagrid rowClick="edit" size="small" >
            <TextField source="examname" />
            <TextField source="start" />
            <TextField source="end" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);