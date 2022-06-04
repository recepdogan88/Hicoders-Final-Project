import * as React from "react";
import {  Create, SimpleForm,  TextInput ,SelectInput } from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const validateUserCreation = (values) => {
    const errors = {};
    const {answer,option1,option2,option3,option4}=values
    if (!((answer == option1) || (answer == option2)||(answer == option3)||(answer == option4))) {
        errors.answer = 'The options must include the answer ';
    }
    return errors
};


export const QuestionCreate = (props) => (
    <Create title="Create a Question" redirect="list">
        <SimpleForm validate={validateUserCreation}>
        <RichTextInput source="question" />
            <TextInput source="option1" />
            <TextInput source="option2" />
            <TextInput source="option3" />
            <TextInput source="option4" />
            <TextInput source="answer" />
            <SelectInput source="category" choices={[
            { id: 'grammar', name: 'Grammar' },
            { id: 'reading', name: 'Reading' },
            { id: 'listening', name: 'Listening' },
        ]} />          
        </SimpleForm>
    </Create>
);
