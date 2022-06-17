import * as React from "react";
import {  Edit,  SimpleForm, TextInput } from "react-admin";


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