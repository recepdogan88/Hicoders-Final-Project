import * as React from "react";
import {  Create, SimpleForm,  TextInput,  } from "react-admin";



export const QuestionCreate = (props) => (
    <Create title="Create a Question" redirect="list">
        <SimpleForm>
            <TextInput source="question" />
            <TextInput source="option1" />
            <TextInput source="option2" />
            <TextInput source="option3" />
            <TextInput source="option4" />
            <TextInput source="answer" />
        </SimpleForm>
    </Create>
);