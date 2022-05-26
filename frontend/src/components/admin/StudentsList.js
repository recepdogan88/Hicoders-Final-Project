import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, EmailField, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DeleteButton } from "react-admin";

export const StudentsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <EditButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);