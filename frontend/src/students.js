// in src/users.js
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

export const StudentCreate = (props) => (
    <Create title="Create a Student" redirect="list">
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

export const StudentEdit = () => (
    <Edit title="Edit Student">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput multiline source="email" />
        </SimpleForm>
    </Edit>
);
