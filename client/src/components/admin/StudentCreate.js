import * as React from "react";
import {  Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DeleteButton } from "react-admin";

export const StudentCreate = (props) => (
    <Create title="Create a Student" redirect="list">
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);