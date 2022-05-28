import * as React from "react";
import {  Edit,  SimpleForm,  TextInput,  } from "react-admin";


export const QuestionEdit = () => (
    <Edit title="Edit Student">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="question" />
            <TextInput source="option1" />
            <TextInput source="option2" />
            <TextInput source="option3" />
            <TextInput source="option4" />
            <TextInput source="answer" />
        </SimpleForm>
    </Edit>
);