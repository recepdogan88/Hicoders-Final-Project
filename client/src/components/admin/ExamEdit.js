import * as React from "react";
import {  Edit,  SimpleForm, TextInput,DateTimeInput } from "react-admin";


export const ExamEdit = () => (
    <Edit title="Edit Exam">
        <SimpleForm>
            <TextInput source="examname" />
            <DateTimeInput source="start" />
            <DateTimeInput source="end" />
        </SimpleForm>
    </Edit>
);