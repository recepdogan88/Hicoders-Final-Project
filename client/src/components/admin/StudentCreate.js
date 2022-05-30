import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, EmailField, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DeleteButton } from "react-admin";

export const StudentCreate = (props) => (
    <Create title="Create a Student" redirect="list">
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);